import { Box, Container, Stack, Text,} from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import axios from "axios";
import { add, format, sub } from "date-fns";
import { NextPage } from "next";
import React, { ReactElement, useContext, useEffect } from "react";
import ItemList from "../components/ItemList";
import ListItem from "../components/ListItem";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Context } from "../context";
import { IItem } from "../context/itemsReducer";
import { capitalize, makeSingularandCapitalize } from "../utils/string-utils";

const DashboardPage: NextPage = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  useEffect(() => {
    fetchItems("goals", state.dayToView.toISOString());

    fetchItems("grats", state.dayToView.toISOString());
  }, [state.dayToView]);

  const fetchItems = (type: string, date: string) => {
    axios
      .get(`/api/${type}`, { params: { date } })
      .then(({ data }) => {
        dispatch({ type: `SET_${type.toUpperCase()}`, payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDayChange = (direction: "previous" | "next") => {
    direction === "previous" ? dispatch({ type: "PREVIOUS_DAY" }) : dispatch({ type: "NEXT_DAY" })
  }

  return (
    <div>
      <Sidebar>
        <Stack>
          <Text> {format(sub(state.dayToView, { days: 1 }), "MMM d")}</Text>
          <Icon as={FaChevronLeft} fontSize={"4xl"} cursor={"pointer"} onClick={() => handleDayChange("previous")} />
        </Stack>
        <Container centerContent>
          <Text fontSize={"5xl"} fontWeight="bold">
            Hi {user.name ? capitalize(user.name) : ""} 👋 <br />
          </Text>
          <Text fontSize={"3xl"}>
            Here are your affirmations for {format(state.dayToView, "MMM d")}
          </Text>
          <Container>
            <ItemList type="goals" />
            <Box>
              <ItemList type="grats" />
            </Box>
          </Container>
        </Container>
        <Stack>
          <Text> {format(add(state.dayToView, { days: 1 }), "MMM d")}</Text>
          <Icon as={FaChevronRight} fontSize={"4xl"} cursor={"pointer"} onClick={() => handleDayChange("next")} />
        </Stack>
      </Sidebar>
    </div>
  );
};


export default DashboardPage;