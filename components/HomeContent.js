import Link from 'next/link'
import styles from '../styles/Home.module.css'
import navLinks from './navLinks'
import socialLinks from './socialLinks'

const MyPortrait = () => (
  <img src="/markmiro-portrait-1x.jpg" srcSet="/markmiro-portrait-2x.jpg 2x" />
)

const MyNameAndTitle = () => (
  <h1>
    <div>Mark Miro</div>
    <small>UI Engineer</small>
  </h1>
)

export default function HomeContent() {
  return (
    <div style={{ display: 'flex' }}>
      <MyPortrait />
      <div>
        <MyNameAndTitle />
        <section>
          <nav className={styles.flexcol}>
            {navLinks.map(({ href, children }) => (
              <Link href={href}>
                <a>{children}</a>
              </Link>
            ))}
          </nav>
        </section>
      </div>
      <section className={styles.flexcol}>
        <header>Links</header>
        {socialLinks.map(({ href, children }) => (
          <Link href={href}>
            <a>{children}</a>
          </Link>
        ))}
      </section>
    </div>
  )
}
