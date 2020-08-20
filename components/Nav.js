import Link from 'next/link'
import { css } from 'linaria'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import c from 'classnames'

import Spacer from './Spacer'
import ActiveLink from './ActiveLink'
import navLinks from './navLinks'
import socialLinks from './socialLinks'

const nav = css`
  overflow: scroll;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  padding: 1em;
  background: #eee;
  min-width: 12em;
  line-height: 1.5;

  @media (max-width: 767px) {
    height: 0;
    overflow: hidden;
    display: none;
  }

  @media (min-width: 768px) {
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
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      {isMobile && (
        <button onClick={() => setNavMobileShow((s) => !s)}>Menu</button>
      )}
      <nav className={c(nav, navMobileShow && navMobileShowCss)}>
        <section className={flexCol}>
          <h1>
            Mark Miro
            <br />
            <small>UI Engineer</small>
          </h1>
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
