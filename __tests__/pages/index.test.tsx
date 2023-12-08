import { render, screen, waitFor } from '@testing-library/react'

import App from 'pages/index'
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))

describe('App', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
  it('matches the snapshot', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen).toMatchSnapshot()
    })
  })
  it('shows the heading of the index page', () => {
    render(<App />)
    // expect(screen.getByRole('heading', { name: 'Next Starter Kit' })).toBeInTheDocument()
  })
})
