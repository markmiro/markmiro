import NextApp from 'next/app'
import { CacheProvider, Global, css } from '@emotion/core'
// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'
import resetCss from 'reset-css/reset.css'

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

    font-size: 16px; /* The base font size everything else is based on */
    @media ${theme.mediaQueries.mobileSmallAndAbove} {
      font-size: 18px; /* The base font size everything else is based on */
    }
    @media (min-width: 1500px) {
      font-size: 20px; /* The base font size everything else is based on */
    }
    font-family: ${theme.fonts.body};
    color: ${theme.colors.c8};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    background: ${theme.colors.c0};
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
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}
