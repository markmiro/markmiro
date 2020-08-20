import Link from 'next/link'
import styles from '../styles/Home.module.css'
import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'

const MyPortrait = () => (
  <img src="/markmiro-portrait-1x.jpg" srcSet="/markmiro-portrait-2x.jpg 2x" />
)

const MyNameAndTitle = () => (
  <Link href="/">
    <a style={{ textDecoration: 'none' }}>
      <h1>
        <div className={styles.name}>Mark Miro</div>
        <small className={styles.title}>UI Engineer</small>
      </h1>
    </a>
  </Link>
)

export default function HomeContent() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <MyPortrait />
        <Spacer size={1} />
        <div>
          <MyNameAndTitle />
          <section style={{ marginTop: 40 }}>
            <nav className={styles.flexcol}>
              {navLinks.map(({ href, children }) => (
                <Link key={href} href={href}>
                  <a className={styles.link}>{children}</a>
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </div>
      <Spacer size={1} />
      <hr className={styles.hr} />
      <Spacer size={1} />
      <section>
        <header>Around the web:</header>
        <Spacer size={1} />
        <div className={styles.social}>
          {socialLinks.map(({ href, children }) => (
            <Link key={href} href={href}>
              <a style={{ marginRight: 8 }}>{children}</a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
