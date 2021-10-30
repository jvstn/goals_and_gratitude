import FeatureDescription from "./FeatureDescription";

import { Box, SimpleGrid, Icon } from "@chakra-ui/react";
import { FcApproval, FcIdea, FcLike } from "react-icons/fc";


export default function FeatureSection() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <FeatureDescription
          icon={<Icon as={FcApproval} w={10} h={10} />}
          title={"Track Goals"}
          text={
            "Track goals to ensure that your are making progress towards your dreams"
          }
        />
        <FeatureDescription
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={"Track Gratitude"}
          text={
            "Track the things you're grateful to keep yourself focused on the positive"
          }
        />
        <FeatureDescription
          icon={<Icon as={FcIdea} w={10} h={10} />}
          title={"Recieve Inspiration"}
          text={
            "Be inspired by daily quotes that help you reach your full potential"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
