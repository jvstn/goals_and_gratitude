import { Input } from "@chakra-ui/input";
import { Box, Center, Text, ListItem as Item } from "@chakra-ui/layout";
import React, { ReactElement, KeyboardEvent, useContext } from "react";
import { Context } from "../../context";

interface ItemData {
  text: String;
}

interface Props {
  type: "goal" | "grat";
  data?: ItemData;
}

export default function ListItem({ type, data }: Props): ReactElement {
  const fillerText = {
    goal: "I am focused on",
    grat: "I am thankful for",
  };
  const { state, dispatch } = useContext(Context);
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    
    if (e.key === "Enter") {
      dispatch({ type: `ADD_${type.toUpperCase()}`, payload: e.currentTarget.value });
    }
  };
  return (
    <div>
      <Item boxShadow="dark-lg" borderRadius="lg" height="min-content" p="2">
        <Center>
          {data?.text ? (
            <Text>{fillerText[type] + " " + data.text.charAt(0).toLowerCase() + data.text.substr(1)}</Text>
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
