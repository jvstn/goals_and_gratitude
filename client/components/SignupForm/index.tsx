import React, { ReactElement, useContext, useState } from 'react'

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
import { Context } from '../../context';
import router from 'next/router';



export default function SignupForm(): ReactElement {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(Context);
  const toast = useToast();

  const handleSumbit = () => {
    setLoading(true);
    axios.post('/api/signup', {
      name,
      email,
      password,
    })
      .then(({data}: any) => {
        setLoading(false)
        dispatch({ type: "SET_USER", payload: data.user });
        window.localStorage.setItem('user', data.user);
        toast({
          status: "success",
          description: data.message,
        })
        router.push('/dashboard');
      })
      .catch((err) => {
        setLoading(false)
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

            <Input
              type="text"
              aria-label="name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            
            <Input type="email" aria-label="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              aria-label="password"
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
              isLoading={loading}
              loadingText={" Submitting"}
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
