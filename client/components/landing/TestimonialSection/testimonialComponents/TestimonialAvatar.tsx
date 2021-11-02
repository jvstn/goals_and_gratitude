import { Avatar } from "@chakra-ui/avatar";
import { Flex, Stack, Text } from "@chakra-ui/layout";

interface TAvatarProps {
  src: string;
  name: string;
  title: string;
}

export default function TestimonialAvatar({ src, name, title }: TAvatarProps) {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={"gray.600"}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
}
