import React from 'react';
import { render } from '../../utils/test-utils';
import ItemList from './'


describe('ItemList', () => {
  it('should give input for gratitudes', () => {
    const { getByText } = render(<ItemList type="goals" />)
    expect(getByText("Goals")).toBeInTheDocument()
  })
  it('should give input for goals', () => {
    const { getByText } = render(<ItemList type="grats" />)
    expect(getByText("Gratitudes")).toBeInTheDocument()
  })
})