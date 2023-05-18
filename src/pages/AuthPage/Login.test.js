/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react'
import Login from './Login'

describe('Login component', () => {
  it('renders form inputs and submit button', () => {
    const { getByTestId, getByPlaceholderText } = render(<Login />)

    const emailInput = getByPlaceholderText('მომხმარებელი')
    const passwordInput = getByPlaceholderText('პაროლი')
    const submitButton = getByTestId('submit-button')
    const loginForm = getByTestId('login-form')

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(loginForm).toBeInTheDocument()
  })

  it('updates form inputs and submits the form', () => {
    const { getByTestId, getByPlaceholderText } = render(<Login />)

    const usernameInput = getByPlaceholderText('მომხმარებელი')
    fireEvent.change(usernameInput, { target: { value: 'Test Username' } })

    const passwordInput = getByPlaceholderText('პაროლი')
    fireEvent.change(passwordInput, { target: { value: 'password' } })

    const loginForm = getByTestId('login-form')

    expect(loginForm).toHaveFormValues({
      username: 'Test Username',
      password: 'password'
    })

    expect(passwordInput.value).toBe('password')
    expect(usernameInput.value).toBe('Test Username')
  })

  it('submits the forms', () => {
    // eslint-disable-next-line no-undef
    const handleSubmit = jest.fn()
    const { getByTestId } = render(<Login />)

    const loginForm = getByTestId('login-form')
    const submitButton = getByTestId('submit-button')

    loginForm.addEventListener('submit', handleSubmit)
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalled()
  })
})