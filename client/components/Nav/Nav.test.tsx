import React from 'react';
import Nav from './'
import {render} from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

describe('Nav', () => {
  it('should render', () => {
    const { getByText } = render(
      <ChakraProvider>
        <Nav />
      </ChakraProvider>
    )

    expect(getByText(/Logo/)).toBeInTheDocument()
  })
})