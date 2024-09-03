import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Games API</span>,
  chat: {
    link: 'https://t.me/wrccwest',
  },
  footer: {
    text: 'Games API',
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  head: (
    <>
      <meta property="og:description" content="Documentation for the Games API" />
      <meta property="description" content="Documentation for the Games API" />
    </>
  ),
  useNextSeoProps() {
  return {
    titleTemplate: '%s – Games API Documentation'
   }
  },
}

export default config
