import Link from 'next/link'
import { css } from 'linaria'
import { useMediaQuery } from 'react-responsive'

import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'
import MyNameAndTitle from './MyNameAndTitle'
import { HStack, VStack } from './Stack'
import Hr from './Hr'
import MyPortrait from './MyPortrait'
import A from './A'
import theme from './theme'

const responsivePortrait = css`
  @media ${theme.mediaQueryies.mobileAndBelow} {
    border: 4px solid blue;
  }
`

const DesktopHome = () => (
  <div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <MyPortrait width="15vw" className={responsivePortrait} />
      <Spacer size={3} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MyNameAndTitle />
        <Spacer size={5} />
        <section>
          <VStack as="nav" space={0} style={{ alignItems: 'start' }}>
            {navLinks.map(({ href, children }) => (
              <Link key={href} href={href} passHref>
                <A>{children}</A>
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
      <HStack>
        {socialLinks.map(({ href, children }) => (
          <Link key={href} href={href} passHref>
            <A>{children}</A>
          </Link>
        ))}
      </HStack>
    </section>
  </div>
)

const MyPortraitAndName = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <MyPortrait width="20vmin" />
    <Spacer size={3} />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MyNameAndTitle />
    </div>
  </div>
)

const MobileHome = () => (
  <VStack space={3}>
    <MyPortraitAndName />
    <Hr />
    <section>
      <VStack as="nav" space={1} style={{ alignItems: 'start' }}>
        {navLinks.map(({ href, children }) => (
          <Link key={href} href={href} passHref>
            <A>{children}</A>
          </Link>
        ))}
      </VStack>
    </section>
    <Hr />
    <section>
      <header>Around the web:</header>
      <Spacer size={3} />
      <VStack style={{ alignItems: 'start' }}>
        {socialLinks.map(({ href, children }) => (
          <Link key={href} href={href} passHref>
            <A>{children}</A>
          </Link>
        ))}
      </VStack>
    </section>
  </VStack>
)

export default function HomeContent() {
  const isDesktop = useMediaQuery({ query: theme.mediaQueryies.mobileAndAbove })

  return isDesktop ? <DesktopHome /> : <MobileHome />
}
