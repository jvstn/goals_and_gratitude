import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  ButtonGroup,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { capitalize } from "../../utils/string-utils";
import SignupButton from "../buttons/SignupButton";
import LoginButton from "../buttons/LoginButton";
import Logo from "../Logo";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "normal", md: "space-between" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box marginLeft={{base: "22vw", md: 0}}>
            <Logo />
          </Box>
          <ButtonGroup display={{ base: "none", md: "initial" }}>
            <LoginButton />
            <SignupButton />
          </ButtonGroup>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <LoginButton />
              <SignupButton />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
