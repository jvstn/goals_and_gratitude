import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { ReactElement } from 'react';
import logo from '../../assets/logo.png'
import '@fontsource/fredoka-one'

export default function Logo(): ReactElement {
  return (
    <Flex flexDirection={"row"} alignItems={"center"}>
      <Image src={logo.src}  alt={"Logo"} height={50} />
      <Text fontFamily={"Fredoka One"} marginLeft={"-3"} fontSize={25}>Goalful</Text>
    </Flex>
  );
}
