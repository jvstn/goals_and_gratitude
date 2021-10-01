import { Input } from "@chakra-ui/input";
import { Box, Center, Text, ListItem as Item } from "@chakra-ui/layout";
import React, { ReactElement, KeyboardEvent, useContext } from "react";
import { Context } from "../../context";
import {  firstCharLower } from "../../utils/string-utils";

interface ItemData {
  text: String;
}

interface Props {
  type: "goals" | "grats";
  data?: ItemData;
}

export default function ListItem({ type, data }: Props): ReactElement {
  const fillerText = {
    goals: "I am focused on",
    grats: "I am thankful for",
  };
  const { dispatch } = useContext(Context);
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch({
        type: `ADD_${type.substr(0, type.length - 1).toUpperCase()}`,
        payload: { text: e.currentTarget.value },
      });
    }
  };
  return (
    <div>
      <Item boxShadow="dark-lg" borderRadius="lg" height="min-content" p="2">
        <Center>
          {data?.text ? (
            <Text>{fillerText[type] + " " + firstCharLower(data.text)}</Text>
          ) : (
            <Input
              placeholder={fillerText[type] + "..."}
              variant="unstyled"
              onKeyDown={handleEnter}
              name={type}
            />
          )}
        </Center>
      </Item>
    </div>
  );
}
