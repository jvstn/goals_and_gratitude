import React from 'react';
import { fireEvent, render } from '../../utils/test-utils';
import SignupForm from './'
import axios from 'axios';


describe('SignupForm', () => {
  it('should render', () => {
    const { getByText } = render(<SignupForm />)
    expect(getByText(/Email Address/i)).toBeInTheDocument()
  })

  it("should update values name value on change", () => {
    const { getByLabelText } = render(<SignupForm />);
    const input: any = getByLabelText("name");
    console.log(input);
    fireEvent.change(input, { target: { value: "testName" } });
    expect(input.value).toBe("testName");
  });

 it('should update values email value on change', () => {
    const { getByLabelText } = render(<SignupForm />);
    const input: any = getByLabelText('email');
    console.log(input)
    fireEvent.change(input, {target: {value: 'test@email.com'}})
    expect(input.value).toBe("test@email.com");
  })

  it('should update values password value on change', () => {
    const { getByLabelText } = render(<SignupForm />);
    const input: any = getByLabelText('Password');
    console.log(input)
    fireEvent.change(input, {target: {value: 'testPass'}})
    expect(input.value).toBe("testPass");
  })

  it('should add loading on submit', async () => {
    const { getByText, getByRole } = render(<SignupForm />);
    fireEvent.click(getByRole('button'))
    
    expect(getByText(/Submitting/)).toBeInTheDocument();
  })
})