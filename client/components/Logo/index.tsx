import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { ReactElement } from 'react';
import logo from '../../assets/logo.png'
import '@fontsource/fredoka-one/400.css'

export default function Logo(): ReactElement {
  return (
    <Flex flexDirection={"row"} alignItems={"center"}>
      <Text fontFamily={"Fredoka One"} color={"purple.400"} fontSize={25}>
        Goalful
      </Text>
      <Image src={logo.src} alt={"Logo"} height={50} marginLeft={"-3"} />
    </Flex>
  );
}
