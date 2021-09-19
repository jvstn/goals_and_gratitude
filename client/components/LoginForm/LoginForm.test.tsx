import React, { ReactElement } from 'react';
import { fireEvent, render } from '../../utils/test-utils';
import LoginForm from '.'


describe('LoginForm', () => {
  it('should render', () => {
    const { getByText } = render(<LoginForm />)

    expect(getByText('Email address')).toBeInTheDocument()
  })
  it('should have email textbox', () => {
    const { getByLabelText } = render(<LoginForm />);
    const emailInput = getByLabelText('email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    expect(emailInput.value).toBe('test@email.com');
  })
  it('should have password textbox', () => {
    const { getByLabelText } = render(<LoginForm />);
    const passwordInput = getByLabelText('password') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: 'testPass' } });
    expect(passwordInput.value).toBe('testPass');
  })
  it('should have show user loading', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const submitButton = getByLabelText('submit-button') as HTMLButtonElement;
    fireEvent.click(submitButton);
    expect(getByText('Submitting')).toBeInTheDocument();
  })
})