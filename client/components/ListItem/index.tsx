import Icon from "@chakra-ui/icon";
import { DeleteIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Center, Text, ListItem as Item, Flex } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import React, {
  ReactElement,
  KeyboardEvent,
  useContext,
  useState,
} from "react";
import { Context } from "../../context";
import { IItem } from "../../context/itemsReducer";
import {
  firstCharLower,
  makeSingularandCapitalize,
} from "../../utils/string-utils";

interface Props {
  itemName: "goals" | "grats";
  data?: IItem;
  index?: number;
}
const fillerText = {
  goals: "I am focused on",
  grats: "I am thankful for",
};

export default function ListItem({
  itemName,
  data,
  index,
}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  const [editing, setEditing] = useState(false);
  const toast = useToast();
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (editing && index !== undefined) {
        dispatch({
          type: `UPDATE_${makeSingularandCapitalize(itemName)}`,
          payload: { text: e.currentTarget.value, idx: index },
        });
        axios
          .put(`/api/${itemName}`, {
            text: e.currentTarget.value,
            _id: data?._id,
          })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        setEditing(false);
      } else {
        
        axios
          .post(`api/${itemName}`, {
            text: e.currentTarget.value,
            email: state.user.email,
          })
          .then(({ data }) => {
            toast({
              status: "success",
              description: `Added new ${itemName}`,
            });
            dispatch({
              type: `ADD_${makeSingularandCapitalize(itemName)}`,
              payload: data,
            });
          })
          .catch((err) => {
            console.log(err);

            toast({
              status: "error",
              description: `Failed to add ${itemName}`,
            });
          });
      }
    }
  };
  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    dispatch({
      type: `DELETE_${makeSingularandCapitalize(itemName)}`,
      payload: { idx: index },
    });
    index !== undefined &&
      axios
        .delete(`/api/${itemName}`, {
          data: { _id: state.goals[index]._id },
        })
        .then(({ data }) => {
          toast({
            status: "success",
            description: `Deleted ${itemName}`,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            status: "error",
            description: `Failed to delete ${itemName}`,
          });
        });
  };
  index && console.log(state.goals[index]._id);
  return (
    <div>
      <Item boxShadow="dark-lg" borderRadius="lg" height="min-content" p="2">
        <Center>
          {!data?.text || editing ? (
            <Input
              placeholder={fillerText[itemName] + "..."}
              variant="unstyled"
              onKeyDown={handleEnter}
              name={itemName}
            />
          ) : (
            <>
              <Center>
                <Box width="15vw">
                  <Text onClick={handleEdit}>
                    {fillerText[itemName] + " " + firstCharLower(data?.text)}
                  </Text>
                </Box>
              </Center>
              <DeleteIcon
                onClick={handleDelete}
                cursor="pointer"
                color="red.300"
                marginLeft="1rem"
              />
            </>
          )}
        </Center>
      </Item>
    </div>
  );
}
