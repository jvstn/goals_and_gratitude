import {
  Box,
  Container,
  Button,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const Logo = () => {
  return (
    <h1>Goalful</h1>
  );
};



export default function Footer() {
  return (
    <Box
      bg={"gray.50"}
      color={"gray.700"}
      height={"10vw"}
      display={"flex"}
      alignItems={"center"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2021 Goalful - All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/login"}>
          <Button>Login</Button>
          </Link>
          <Link href={"/signup"}>
          <Button>Signup</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
