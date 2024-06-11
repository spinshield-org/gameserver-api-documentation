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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:description" content="Documentation for the Games API" />
      <meta property="description" content="Documentation for the Games API" />
    </>
  ),
  useNextSeoProps() {
  return {
    titleTemplate: '%s – Gameserver API Documentation'
   }
  },
}

export default config
