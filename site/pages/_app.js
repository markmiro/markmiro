import NextApp from 'next/app'
import { CacheProvider, Global, css } from '@emotion/core'
// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

import theme, { colorsCss } from '../components/theme'

const globalStyles = css`
  ${colorsCss}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.body};
    color: ${theme.colors.neutral.darkest};
    background: ${theme.colors.neutral.lightest};
  }

  a {
    color: ${theme.colors.blue};
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    font-size: ${theme.fontSizes[0]};
    box-sizing: border-box;
    font-weight: normal;
    line-height: 1;
  }
`

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}
