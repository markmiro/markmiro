import React from "react"
import resetCss from "reset-css/reset.css"
import { css, Global } from "@emotion/core"

import theme, { colorsCss, spaceCss } from "./theme"
import MaybeSubscribedBanner from "./MaybeSubscribedBanner"

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

    font-size: 13px; /* The base font size everything else is based on */
    @media (min-width: 321px) {
      font-size: 16px;
    }
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
    color: inherit;
    text-decoration: none;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <Global styles={globalStyles} />
      <MaybeSubscribedBanner />
      {children}
    </>
  )
}
