import Link from 'next/link'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import c from 'classnames'
import styles from '../styles/Nav.module.css'
import Spacer from './Spacer'
import ActiveLink from './ActiveLink'
import navLinks from './navLinks'
import socialLinks from './socialLinks'

export default function Nav() {
  const [navMobileShow, setNavMobileShow] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      {isMobile && (
        <button onClick={() => setNavMobileShow((s) => !s)}>Menu</button>
      )}
      <nav className={c(styles.nav, navMobileShow && styles.navMobileShow)}>
        <section className={styles.flexcol}>
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
        <section className={styles.flexcol}>
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
