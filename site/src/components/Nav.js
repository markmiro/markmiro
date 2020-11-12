import React from "react"
import { css } from "@emotion/core"
import { useState } from "react"

import theme from "./theme"
import Button from "./Button"
import Spacer from "./Spacer"

function DesktopNav({ children }) {
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

function MobileNav({ children }) {
  const [shouldShowOnMobile, setShouldShowOnMobile] = useState(false)

  return (
    <div
      css={css`
        padding: ${theme.pagePadding};
        width: 100%; /* because parent flexbox has center layout */
        border-bottom: 1px solid ${theme.colors.c2};
        display: block;
        @media ${theme.mediaQueries.mobileAndAbove} {
          display: none;
        }
      `}
    >
      <Button onClick={() => setShouldShowOnMobile(s => !s)}>Menu</Button>
      <div style={{ display: shouldShowOnMobile ? "block" : "none" }}>
        <Spacer size={4} />
        {children}
      </div>
    </div>
  )
}

const Nav = ({ children }) => (
  <>
    <MobileNav>{children}</MobileNav>
    <DesktopNav>{children}</DesktopNav>
  </>
)

export default Nav