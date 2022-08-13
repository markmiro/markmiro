import { Global, css } from '@emotion/react'
import resetCss from 'reset-css/reset.css'
import theme, { colorsCss, spaceCss } from './theme'

const globalStylesCss = css`
  ${resetCss}
  ${colorsCss}
  ${spaceCss}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
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
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }
`

export const globalStyles = <Global styles={globalStylesCss} />
