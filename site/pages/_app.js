// Stolen from: https://github.com/vercel/next.js/blob/canary/examples/with-emotion-swc/pages/_app.js
import React from 'react'
import NextApp from 'next/app'
import { globalStyles } from '../components/styles'
// Note: the reset doesn't work with JS disabled in dev, but it does work in prod (according to the docs)
// https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css
import 'reset-css/reset.css'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        {globalStyles}
        <Component {...pageProps} />
      </>
    )
  }
}
