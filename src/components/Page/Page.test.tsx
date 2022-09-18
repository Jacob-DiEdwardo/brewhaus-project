import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from './index'
import Theme from '../Theme'

test('renders submit button', () => {
  render(
    <Theme>
      <Page />
    </Theme>
  )
  const submitButton = screen.getByText(/submit/i)
  expect(submitButton).toBeInTheDocument()
});
