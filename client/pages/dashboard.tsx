import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { Center, ListIcon, List } from "@chakra-ui/react";
import axios from "axios";
import React, { ReactElement, useContext, useEffect } from "react";
import ItemList from "../components/ItemList";
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Context } from "../context";
import { IItem } from "../context/itemsReducer";

export default function dashboard(): ReactElement {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    axios.get('/api/goals', { params: { date: new Date().toISOString() } })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: "SET_GOALS", payload: data });
      }).catch((err) => {
        console.log(err);
        
    })
    
  }, [])
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
