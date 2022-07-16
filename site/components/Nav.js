import React from 'react'
import { css } from '@emotion/react'
import { useState } from 'react'
import { IconMenu2 } from '@tabler/icons'

import theme from './theme'
import Button from './Button'
import NavInner from './NavInner'
import Spacer from './Spacer'

function DesktopNav() {
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
      <NavInner />
    </div>
  )
}

function MobileNav() {
  const [shouldShowOnMobile, setShouldShowOnMobile] = useState(false)

  const invisible = css`
    &:not(:focus-within) {
      opacity: 0;
      transform: scaleY(0.8);
      pointer-events: none;
      height: 0;
    }
  `

  const visible = css`
    transition-property: transform, opacity, height;
    transition-timing-function: ease-out;
    transition-duration: 100ms;
    opacity: 1;
    transform-origin: top;
    transform: scaleY(1) translateY(0);
  `

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
      <Button
        onClick={() => setShouldShowOnMobile((s) => !s)}
        css={css`
          display: flex;
          align-items: center;
          gap: ${theme.space[0]};
        `}
      >
        <IconMenu2 size={16} stroke={1} strokeLinejoin="miter" />
        Menu
      </Button>
      <div css={shouldShowOnMobile ? visible : invisible}>
        <Spacer size={4} />
        <NavInner />
      </div>
    </div>
  )
}

const Nav = () => (
  <>
    <MobileNav />
    <DesktopNav />
  </>
)

export default Nav
