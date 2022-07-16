import React from 'react'
import { css } from '@emotion/react'
import { useState } from 'react'
import { IconMenu2 } from '@tabler/icons'

import theme from './theme'
import Button from './Button'
import NavInner from './NavInner'
import Spacer from './Spacer'
import { opacify } from 'polished'
import Hr from './Hr'

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
      transform: translateX(-10em);
      pointer-events: none;
      height: 0;
    }
  `

  const visible = css`
    transition-property: transform, opacity, height;
    transition-timing-function: ease-out;
    transition-duration: 100ms;
    opacity: 1;
    transform: translateX(0);
  `

  return (
    <div
      css={css`
        width: 100%; /* because parent flexbox has center layout */
        display: block;
        position: fixed;
        z-index: 1;
        top: 0;
        @media ${theme.mediaQueries.mobileAndAbove} {
          display: none;
        }
      `}
    >
      <div
        css={css`
          ${shouldShowOnMobile &&
          css`
            background: ${theme.colors.c0};
            min-width: ${theme.measure.navColumnText};
            border-right: 1px solid ${theme.colors.c8};
            border-bottom: 1px solid ${theme.colors.c8};
          `}
          width: max-content;
          padding: 0 ${theme.pagePadding};
        `}
      >
        <Button
          onClick={() => setShouldShowOnMobile((s) => !s)}
          css={css`
            background: ${theme.colors.c1};
            color: ${theme.colors.c8};
            border: none;
            display: flex;
            align-items: center;
            gap: ${theme.space[0]};
            :hover {
              background: ${theme.colors.c8};
              color: ${theme.colors.c0};
            }
          `}
        >
          <IconMenu2 size={16} stroke={1} strokeLinejoin="miter" />
          Menu
        </Button>

        <div css={shouldShowOnMobile ? visible : invisible}>
          <div
            css={css`
              padding: ${theme.pagePadding} 0;
            `}
          >
            <NavInner />
            <Spacer size={2} />
          </div>
        </div>
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
