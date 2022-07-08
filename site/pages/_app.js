// Stolen from: https://github.com/vercel/next.js/blob/canary/examples/with-emotion-swc/pages/_app.js
import React from 'react'
import NextApp from 'next/app'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { globalStyles } from '../components/styles'

const cache = createCache({ key: 'next' })

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}
