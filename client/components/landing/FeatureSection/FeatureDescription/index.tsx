import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React, { ReactElement } from "react";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

export default function FeatureDescription({
  title,
  text,
  icon,
}: FeatureProps): ReactElement {
  return (
    <Box>
      <Stack textAlign="center" >
        <Flex
          w={16}
          h={16}
          alignSelf="center"
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
          
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    </Box>
  );
}
