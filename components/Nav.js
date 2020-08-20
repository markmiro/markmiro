import Link from 'next/link'
import { css } from 'linaria'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import c from 'classnames'

import theme from './theme'
import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'
import ActiveLink from './ActiveLink'
import MyNameAndTitle from './MyNameAndTitle'

const nav = css`
  overflow: scroll;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  padding: ${theme.space[2]} ${theme.space[3]};
  min-width: ${theme.measure.navColumnText};
  line-height: ${theme.lineHeights[1]};

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

export default function Nav() {
  const [navMobileShow, setNavMobileShow] = useState(false)
  const isMobile = useMediaQuery({ query: theme.mediaQueryies.mobileAndBelow })

  return (
    <>
      {isMobile && (
        <button onClick={() => setNavMobileShow((s) => !s)}>Menu</button>
      )}
      <nav className={c(nav, navMobileShow && navMobileShowCss)}>
        <section className={flexCol}>
          <MyNameAndTitle />
          <Spacer size={2} />
          {navLinks.map(({ href, children }) => (
            <ActiveLink key={href} href={href}>
              {children}
            </ActiveLink>
          ))}
        </section>
        <Spacer size={2} />
        <section className={flexCol}>
          <header>Links</header>
          {socialLinks.map(({ href, children }) => (
            <Link key={href} href={href}>
              <a>{children}</a>
            </Link>
          ))}
        </section>
      </nav>
    </>
  )
}
