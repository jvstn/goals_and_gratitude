import { Heading } from '@chakra-ui/layout';
import React, { ReactElement } from 'react'
import { ChildrenProps } from './TestimonialContent'


export default function TestimonialHeading({children}: ChildrenProps): ReactElement {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
}
