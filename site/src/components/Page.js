import React from "react"
import { css } from "@emotion/core"

import theme from "./theme"
import Nav from "./Nav"
import Spacer from "./Spacer"
import Heading from "./Heading"
import Footer from "./Footer"
import Vr from "./Vr"
import Head2 from "./Head2"
import Layout from "./Layout"
import NavInner from "./NavInner"

const page = css`
  display: flex;
  @media ${theme.mediaQueries.mobileAndBelow} {
    flex-direction: column;
    align-items: center;
  }
  min-height: 100vh;
`

const contentCss = css`
  width: 100%;
  padding: 0 ${theme.pagePadding};
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const contentInnerCss = css`
  width: 100%;
  max-width: ${theme.measure[1]};
`

export function Sidebar({ children }) {
  return (
    <div
      css={css`
        padding: ${theme.pagePadding};
        min-width: ${theme.measure.navColumnText};

        position: sticky;
        top: 0;

        /* If window height is too small, just want to scroll nav, not the whole page */
        max-height: 100vh;
        overflow: scroll; /* unlikely, but if window height too small we want to scroll */

        display: none;
        @media ${theme.mediaQueries.mobileAndAbove} {
          display: block;
        }
      `}
    >
      {children}
    </div>
  )
}

export default function Page({ title, sidebar, children }) {
  return (
    <Layout>
      <div css={page}>
        <Head2 title={title} />
        <Nav>
          <NavInner />
        </Nav>
        <Vr />
        <section css={contentCss}>
          <div css={contentInnerCss}>
            <Spacer size={7} />
            <div
              css={css`
                margin-top: -1.5px; /* Visual adjustment to align with top of nav */
                letter-spacing: ${theme.letterSpacings[-1]};
              `}
            >
              <Heading>{title}</Heading>
            </div>
            <Spacer size={7} />
            {children}
            <Spacer size={9} />
          </div>
        </section>
        {sidebar && <Sidebar>{sidebar}</Sidebar>}
      </div>
      <Footer />
    </Layout>
  )
}
