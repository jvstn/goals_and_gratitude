import { Input } from "@chakra-ui/input";
import { Box, Center, Text, ListItem as Item } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import React, {
  ReactElement,
  KeyboardEvent,
  useContext,
  useState,
} from "react";
import { Context } from "../../context";
import {
  firstCharLower,
  makeSingularandCapitalize,
} from "../../utils/string-utils";

interface ItemData {
  text: string;
}

interface Props {
  itemName: "goals" | "grats";
  data?: ItemData;
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
  console.log(editing);
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (editing && index !== undefined) {
        dispatch({
          type: `UPDATE_${makeSingularandCapitalize(itemName)}`,
          payload: { text: e.currentTarget.value, idx: index },
        });
        axios.put(`/api/${itemName}`, { text: e.currentTarget.value, _id: state.goals[index]._id })
          .then(({ data }) => { console.log(data) })
          .catch(err => { console.log(err) });
        setEditing(false);
      } else {
        dispatch({
          type: `ADD_${makeSingularandCapitalize(itemName)}`,
          payload: { text: e.currentTarget.value, idx: index },
        });
        axios
          .post(`api/${itemName}`, {
            text: e.currentTarget.value,
            email: state.user.email,
          })
          .then(() => {
            toast({
              status: "success",
              description: `Added new ${itemName}`,
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
  
  return (
    <div>
      <Item
        boxShadow="dark-lg"
        borderRadius="lg"
        height="min-content"
        p="2"
        onClick={handleEdit}
      >
        <Center>
          {!data?.text || editing ? (
            <Input
              placeholder={fillerText[itemName] + "..."}
              variant="unstyled"
              onKeyDown={handleEnter}
              name={itemName}
            />
          ) : (
            <Text>
              {fillerText[itemName] + " " + firstCharLower(data?.text)}
            </Text>
          )}
        </Center>
      </Item>
    </div>
  );
}
