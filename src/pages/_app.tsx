import { ModalProvider, ToastProvider } from '@apideck/components'

import { AppProps } from 'next/app'
import './app.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')
      if (loader) loader.remove()
    }
  }, [])
  return (
    <ToastProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ToastProvider>
  )
}
