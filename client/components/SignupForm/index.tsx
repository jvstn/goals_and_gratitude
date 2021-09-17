import React, { ReactElement, useState } from 'react'

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import axios from 'axios';



export default function SignupForm(): ReactElement {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSumbit = () => {
    console.log(email, name, password);
    axios.post('http://localhost:5000/api/signup', {
      name,
      email,
      password,
    })
      .then(({data}: any) => {
        toast({
          status: "success",
          description: data.message,
        })
      })
      .catch((err) => {
        toast({
          status: "error",
          description: err.message,
        })
      });
  }
  return (
    <div>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="Name">
            <FormLabel>Name</FormLabel>
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.400"}>Forgot password?</Link>
            </Stack>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleSumbit}
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
