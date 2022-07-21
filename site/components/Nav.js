import { css } from '@emotion/react'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'

import { NavDesktop } from './NavDesktop'
import { NavMobile } from './NavMobile'
import theme from './theme'

const skipNavLink = css`
  z-index: 999;
  padding: ${theme.space[2]};
  background: white;
  position: absolute;
  top: -100%;
  color: ${theme.colors.blue};
  :focus {
    position: fixed;
    top: 0;
    left: 0;
  }
`

const Nav = () => (
  <>
    <SkipNavLink css={skipNavLink} />
    <NavMobile />
    <NavDesktop />
    <SkipNavContent />
  </>
)

export default Nav
