import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { Center, ListIcon, List } from "@chakra-ui/react";
import React, { ReactElement, useContext } from "react";
import ItemList from "../components/ItemList";
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Context } from "../context";
import { IItem } from "../context/itemsReducer";

export default function dashboard(): ReactElement {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      <Sidebar>
        <Container centerContent>
          <Text fontSize={"5xl"} fontWeight="bold">
            Hello, User 👋
          </Text>
          <Container>
            <ItemList type="goals" />
            <Box>
              <ItemList type="grats" />
            </Box>
          </Container>
        </Container>
      </Sidebar>
    </div>
  );
}
