import NextApp from 'next/app'
import { CacheProvider, Global, css } from '@emotion/core'
// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'
import resetCss from 'reset-css/reset.css'
import { MDXProvider } from '@mdx-js/react'

import theme, { colorsCss, spaceCss } from '../components/theme'

const globalStyles = css`
  ${colorsCss}
  ${spaceCss}
  ${css`
    ${resetCss}
  `}

  * {
    box-sizing: border-box;
  }

  button {
    margin: 0;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.body};
    color: ${theme.colors.c8};
    background: ${theme.colors.c0};
    font-size: 16px; /* The base font size everything else is based on */
    @media ${theme.mediaQueries.mobileAndAbove} {
      font-size: 18px; /* The base font size everything else is based on */
    }
  }

  hr {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
  }

  a {
    color: ${theme.colors.blue};
    text-decoration: none;
  }
`

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
        <Global styles={globalStyles} />
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </CacheProvider>
    )
  }
}
