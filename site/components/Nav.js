import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import theme from './theme'
import Button from './Button'
import NavInner from './NavInner'

const wrapper = css`
  padding: ${theme.pagePadding};
  min-width: ${theme.measure.navColumnText};
`

const hideMobile = css`
  display: none;
  height: 0;

  @media ${theme.mediaQueries.mobileAndAbove} {
    display: block;
    height: auto;

    position: sticky;
    top: 0;

    /* If window height is too small, just want to scroll nav, not the whole page */
    max-height: 100vh;
    overflow: scroll;
  }
`

const showMobile = css`
  display: block;
  height: auto;
`

const MobileNav = styled.nav`
  padding-top: ${theme.pagePadding};
  padding-left: ${theme.pagePadding};
  padding-right: ${theme.pagePadding};
  /* Not doing bottom padding to avoid doubling up on spacing */
`

export default function Nav() {
  const [navMobileShow, setNavMobileShow] = useState(false)
  const isMobile = useMediaQuery({ query: theme.mediaQueries.mobileAndBelow })

  return (
    <>
      {isMobile && (
        <MobileNav>
          <Button onClick={() => setNavMobileShow((s) => !s)}>Menu</Button>
        </MobileNav>
      )}
      <div css={[wrapper, hideMobile, navMobileShow && showMobile]}>
        <NavInner />
      </div>
    </>
  )
}
