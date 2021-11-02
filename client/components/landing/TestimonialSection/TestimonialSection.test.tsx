import React from 'react';
import { render } from '../../../utils/test-utils';
import TestimonialSection from './'


describe('TestimonialSection', () => {
  it('should render', () => {
    const { getByText } = render(<TestimonialSection />)

    expect(getByText("Mindblowing Service")).toBeInTheDocument();
  })
})