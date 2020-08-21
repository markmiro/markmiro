import Link from 'next/link'
import { css } from 'linaria'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import c from 'classnames'
import { styled } from 'linaria/react'

import theme from './theme'
import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'
import ActiveLink from './ActiveLink'
import MyNameAndTitle from './MyNameAndTitle'
import { Overline } from './Heading'
import { VStack } from './Stack'
import Button from './Button'
import A from './A'

const nav = css`
  overflow: scroll;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  padding: ${theme.pagePadding};
  min-width: ${theme.measure.navColumnText};

  @media ${theme.mediaQueryies.mobileAndBelow} {
    height: 0;
    overflow: hidden;
    display: none;
  }

  @media ${theme.mediaQueryies.mobileAndAbove} {
    position: sticky;
    max-height: 100vh;
    top: 0;
  }
`

const navMobileShowCss = css`
  height: 100%;
  display: flex;
`

const flexCol = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

const MobileNav = styled.nav`
  width: 100%;
  padding-top: ${theme.pagePadding};
  padding-left: ${theme.pagePadding};
  padding-right: ${theme.pagePadding};
  /* Not doing bottom padding to avoid doubling up on spacing */
  display: flex;
  justify-content: space-between;
`

export default function Nav() {
  const [navMobileShow, setNavMobileShow] = useState(false)
  const isMobile = useMediaQuery({ query: theme.mediaQueryies.mobileAndBelow })

  return (
    <>
      {isMobile && (
        <MobileNav>
          <Button onClick={() => setNavMobileShow((s) => !s)}>Menu</Button>
        </MobileNav>
      )}
      <nav className={c(nav, navMobileShow && navMobileShowCss)}>
        <section className={flexCol}>
          <MyNameAndTitle />
          <Spacer size={4} />
          <VStack style={{ alignItems: 'start' }}>
            {navLinks.map(({ href, children }) => (
              <ActiveLink key={href} href={href}>
                {children}
              </ActiveLink>
            ))}
          </VStack>
        </section>
        <Spacer size={4} />
        <section className={flexCol}>
          <Overline>Links</Overline>
          <Spacer size={0} />
          <VStack style={{ alignItems: 'start' }}>
            {socialLinks.map(({ href, children }) => (
              <Link key={href} href={href} passHref>
                <A style={{ fontSize: theme.fontSizes[-1] }}>{children}</A>
              </Link>
            ))}
          </VStack>
        </section>
      </nav>
    </>
  )
}
