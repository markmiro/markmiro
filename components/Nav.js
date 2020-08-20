import Link from 'next/link'
import { useState } from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import c from 'classnames'
import styles from '../styles/Nav.module.css'
import ActiveLink from './ActiveLink'
import Spacer from './Spacer'

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
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/posts">Posts</ActiveLink>
          <ActiveLink href="/projects">Projects</ActiveLink>
        </section>
        <Spacer size={2} />
        <section className={styles.flexcol}>
          <header>Links</header>
          <Link href="https://codepen.io/markmiro">
            <a>CodePen</a>
          </Link>
          <Link href="https://codesandbox.io/u/markmiro">
            <a>CodeSandBox</a>
          </Link>
          <Link href="https://twitter.com/markmiro">
            <a>Twitter</a>
          </Link>
          <Link href="https://github.com/markmiro">
            <a>GitHub</a>
          </Link>
        </section>
      </nav>
    </>
  )
}
