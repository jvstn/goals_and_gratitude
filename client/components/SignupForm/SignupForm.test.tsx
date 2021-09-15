import React from 'react';
import { render } from '../../utils/test-utils';
import SignupForm from './'


describe('SignupForm', () => {
  it('should render', () => {
    const { getByText } = render(<SignupForm />)
    expect(getByText(/Email Address/i)).toBeInTheDocument()
  })
})