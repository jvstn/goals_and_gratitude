import { Text } from "@chakra-ui/layout";
import { ChildrenProps } from "./TestimonialContent";

export default function TestimonialText({ children }: ChildrenProps) {
  return (
    <Text
      textAlign={"center"}
      color={ "gray.600"}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};