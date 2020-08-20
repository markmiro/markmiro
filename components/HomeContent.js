import Link from 'next/link'
import { css } from 'linaria'

import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'

const styles = {
  name: css`
    margin-top: 49px; /* to align with the dark/light separation line in the background of markmiro-portrait.jpg */
    font-size: 48px;
    font-weight: 400;
  `,
  title: css`
    font-size: 18px;
    display: block;
  `,
  link: css`
    padding-top: 2px;
    padding-bottom: 2px;
  `,
  hr: css`
    border: none;
    border-top: 0.5px solid black;
    opacity: 0.25;
  `,
  social: css`
    display: flex;
    margin-top: -6px; /* Minor adjustment so social links appear to be the same distance from the hr element as the img element right above that hr element */
    font-size: 14px;
  `,
  flexCol: css`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  `,
}

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
            <nav className={styles.flexCol}>
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
