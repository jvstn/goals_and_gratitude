import { Flex, Stack, Heading, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import LoginForm from "../components/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
        </Stack>
        <LoginForm />
      </Stack>
    </Flex>
  );
};

export default LoginPage;