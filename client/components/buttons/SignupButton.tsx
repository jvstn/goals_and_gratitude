import { Button } from '@chakra-ui/button';
import { Link } from '@chakra-ui/layout';
import React, { ReactElement } from 'react'


export default function SignupButton(): ReactElement {
  return (
    <Link href={"/signup"}>
      <Button colorScheme={"purple"}>Signup</Button>
    </Link>
  );
}
