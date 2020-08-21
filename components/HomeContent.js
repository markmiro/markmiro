import Link from 'next/link'
import { css } from 'linaria'

import theme from './theme'
import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'
import MyNameAndTitle from './MyNameAndTitle'
import { HStack, VStack } from './Stack'
import Hr from './Hr'
import MyPortrait from './MyPortrait'

const styles = {
  link: css`
    padding-top: 2px;
    padding-bottom: 2px;
  `,
  social: css`
    font-size: ${theme.fontSizes[-1]};
  `,
  flexCol: css`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  `,
}

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
            <VStack as="nav" space={0}>
              {navLinks.map(({ href, children }) => (
                <Link key={href} href={href}>
                  <a className={styles.link}>{children}</a>
                </Link>
              ))}
            </VStack>
          </section>
        </div>
      </div>
      <Spacer size={3} />
      <Hr />
      <Spacer size={3} />
      <section>
        <header>Around the web:</header>
        <Spacer size={1} />
        <HStack className={styles.social}>
          {socialLinks.map(({ href, children }) => (
            <Link key={href} href={href}>
              <a>{children}</a>
            </Link>
          ))}
        </HStack>
      </section>
    </div>
  )
}
