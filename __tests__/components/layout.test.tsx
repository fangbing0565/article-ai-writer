import { render, waitFor } from '@testing-library/react'

import Layout from 'components/Layout'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    }
  }
})

describe('Layout Component', () => {
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
    render(
      <Layout>
        <div>test</div>
      </Layout>
    )
    await waitFor(() => {
      expect(screen).toMatchSnapshot()
    })
  })
  it('renders the page layout with the correct document title', async () => {
    render(
      <Layout title="Test document title">
        <div>App</div>
      </Layout>
    )
    await waitFor(() => {
      expect(document.title).toEqual('Test document title')
    })
  })
})
