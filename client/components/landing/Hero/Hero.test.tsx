import React from 'react';
import { render } from '../../../utils/test-utils';
import Hero from './'


describe('Hero', () => {
  it('should render and display content', () => {
    const { getByText } = render(<Hero />)

    expect(getByText("Get Started")).toBeInTheDocument()
  })
})