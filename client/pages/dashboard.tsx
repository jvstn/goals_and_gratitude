import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React, { ReactElement } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar';


export default function dashboard(): ReactElement {
  return (
    <div>
      <Sidebar>
        <Container centerContent>
          <Text fontSize={"5xl"} fontWeight="bold">
            Hello, User 👋
          </Text>
          
        </Container>
      </Sidebar>
    </div>
  );
}
