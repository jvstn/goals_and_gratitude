import {
  Box,
  Container,
  Stack,
} from "@chakra-ui/react";
import LoginButton from "../../buttons/LoginButton";
import SignupButton from "../../buttons/SignupButton";
import Logo from "../../Logo";


export default function Footer() {
  return (
    <Box
      bg={"gray.50"}
      color={"gray.700"}
      height={{sm: "25vh",  md: "8vw"}}
      display={"flex"}
      alignItems={"center"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        marginBottom={{base: "5vh", md: "0"}}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box marginRight={7}>
          <Logo />
        </Box>
        <Stack direction={"row"} spacing={3}>
          <LoginButton />
          <SignupButton />
        </Stack>
      </Container>
    </Box>
  );
}
