import React from 'react';
import { render } from '../../utils/test-utils';
import LogoutButton from './'


describe('LogoutButton', () => {
  it('should render', () => {
    const { getByText } = render(<LogoutButton />)

    expect(getByText("Logout")).toBeInTheDocument()
  })
})