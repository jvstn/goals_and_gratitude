import React from 'react';
import { render } from '../../../utils/test-utils';
import Footer from './'


describe('Footer', () => {
  it('should render', () => {
    const { getByText } = render(<Footer />)
    expect(getByText("Goalful")).toBeInTheDocument()
  })
})