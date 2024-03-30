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
  useNextSeoProps() {
  return {
    titleTemplate: '%s – Gameserver API Documentation'
   }
  },
}

export default config
