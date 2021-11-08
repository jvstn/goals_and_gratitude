import React, { ReactElement, useContext, useReducer, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Context } from "../../context";
import router, {useRouter} from 'next/router';

export default function LoginForm(): ReactElement {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const {state, dispatch} = useContext(Context)
  const toast = useToast();
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("/api/login", { email, password })
      .then(({ data }) => {
        toast({
          status: "success",
          description: "Succesful login",
        });
        dispatch({ type: 'SET_USER', payload: data.user })
        window.localStorage.setItem('user', JSON.stringify(data))
        router.push('/dashboard');
        setLoading(false);
      })
      .catch((err) => {
        toast({
          status: "error",
          description: err.message,
        });
        setLoading(false);
      });
  };
  return (
    <div>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>

            <Input
              type="email"
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <Button
              aria-label="submit-button"
              isLoading={loading}
              loadingText={" Submitting"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
