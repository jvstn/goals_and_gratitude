import React, { ReactElement, ReactNode } from 'react'
import {Stack} from '@chakra-ui/react'
export interface ChildrenProps {
  children: ReactNode
}

export default function TestimonialContent({children}: ChildrenProps): ReactElement {
  return (
    <Stack
      bg={"white"}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: "white",
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
}
