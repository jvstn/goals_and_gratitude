import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { Center, ListIcon, List } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import React, { ReactElement, useContext, useEffect } from "react";
import ItemList from "../components/ItemList";
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Context } from "../context";
import { IItem } from "../context/itemsReducer";

const DashboardPage: NextPage = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    axios
      .get("/api/goals", { params: { date: state.dayToView.toISOString() } })
      .then(({ data }) => {
        dispatch({ type: "SET_GOALS", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/grats", { params: { date: state.dayToView.toISOString() } })
      .then(({ data }) => {
        dispatch({ type: "SET_GRATS", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
};


export default DashboardPage;