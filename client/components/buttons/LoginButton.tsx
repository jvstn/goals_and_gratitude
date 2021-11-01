import { Button } from '@chakra-ui/button'
import { Link } from '@chakra-ui/layout'
import React, { ReactElement } from 'react'

export default function LoginButton(): ReactElement {
  return (
    <Link href={"/login"}>
      <Button bgColor="gray.300">Login</Button>
    </Link>
  )
}
