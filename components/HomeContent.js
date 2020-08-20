import Link from 'next/link'
import { css } from 'linaria'

import theme from './theme'
import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'
import MyNameAndTitle from './MyNameAndTitle'

const styles = {
  link: css`
    padding-top: 2px;
    padding-bottom: 2px;
  `,
  hr: css`
    border: none;
    border-top: 1px solid ${theme.colors.neutral.light};
  `,
  social: css`
    display: flex;
    font-size: ${theme.fontSizes[-1]};
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

export default function HomeContent() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <MyPortrait />
        <Spacer size={3} />
        <div>
          <div
            style={{
              height: 53 /* to align with the dark/light separation line in the background of markmiro-portrait.jpg */,
            }}
          />
          <MyNameAndTitle />
          <div
            style={{
              height: 58 /* adjustment to line up with my shoulder in markmiro-portrait.jpg */,
            }}
          />
          <section>
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
      <Spacer size={3} />
      <hr className={styles.hr} />
      <Spacer size={3} />
      <section>
        <header>Around the web:</header>
        <Spacer size={1} />
        <div className={styles.social}>
          {socialLinks.map(({ href, children }) => (
            <Link key={href} href={href}>
              <a style={{ marginRight: theme.space[0] }}>{children}</a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
