import React from 'react';
import { render } from '../../../utils/test-utils';
import FeatureSection from './'


describe('FeatureSection', () => {
  it('should render', () => {
    const { getByText } = render(<FeatureSection />);
    expect(getByText("Track Goals")).toBeInTheDocument();
  })
})