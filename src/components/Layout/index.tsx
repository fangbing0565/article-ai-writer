import Head from 'next/head'
import React, { ReactNode } from 'react'
import styles from './index.module.css'

type Props = {
  children: ReactNode
  title?: string
  description?: string
  favicon?: string
}

const Layout = ({
  children,
  title = 'Apideck - Next Starter Kit',
  description = 'A Next.js starter kit with TypeScript, Antd, Jest, Prettier, and Eslint',
  favicon = '/img/logo.png'
}: Props) => (
  <div className="font-basier-circle">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={favicon} />
    </Head>
    <div className={`min-h-screen bg-gray-50 ${styles.layout}`}>{children}</div>
  </div>
)

export default Layout
