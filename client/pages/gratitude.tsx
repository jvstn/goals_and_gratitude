import { Box, Container, Stack, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { add, format, sub } from "date-fns";
import { NextPage } from "next";
import React, { useContext, useEffect } from "react";
import ItemList from "../components/ItemList";
import Sidebar from "../components/Sidebar";
import { Context } from "../context";
import { capitalize } from "../utils/string-utils";
import { useDayChange } from "../hooks/useDayChange";
import { useFetchItems } from "../hooks/useFetchItems";

const GoalsPage: NextPage = () => {
  const { state, dispatch } = useContext(Context);
  const { user, dayToView } = state;
  useEffect(() => {
    useFetchItems("grats", dayToView.toISOString(), dispatch);
  }, [dayToView]);

  return (
    <div>
      <Sidebar>
        <Stack onClick={() => useDayChange("previous", dispatch)}>
          <Text> {format(sub(dayToView, { days: 1 }), "MMM d")}</Text>
          <Icon as={FaChevronLeft} fontSize={"4xl"} cursor={"pointer"} />
        </Stack>
        <Container centerContent>
          <Text fontSize={"5xl"} fontWeight="bold">
            Hi {user.name ? capitalize(user.name) : ""} 👋 <br />
          </Text>
          <Text fontSize={"3xl"}>
            Here are your gratitudes for {format(dayToView, "MMM d")}
          </Text>
          <Container>
            <ItemList type="grats" />
          </Container>
        </Container>
        <Stack onClick={() => useDayChange("next", dispatch)}>
          <Text> {format(add(dayToView, { days: 1 }), "MMM d")}</Text>
          <Icon as={FaChevronRight} fontSize={"4xl"} cursor={"pointer"} />
        </Stack>
      </Sidebar>
    </div>
  );
};

export default GoalsPage;
