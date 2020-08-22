import Link from 'next/link'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'

import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'
import MyNameAndTitle from './MyNameAndTitle'
import { HStack, VStack } from './Stack'
import Hr from './Hr'
import MyPortrait from './MyPortrait'
import A from './A'
import theme from './theme'

const HomeContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${theme.space[3]};
  padding-bottom: ${theme.space[3]};
`

const DesktopHome = () => (
  <HomeContainer>
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <MyPortrait width="15vw" />
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
  </HomeContainer>
)

const MobileHome = () => (
  <div style={{ padding: theme.pagePadding }}>
    <VStack space={3}>
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
  </div>
)

export default function HomeContent() {
  // return <DesktopHome />
  // const isDesktop = useMediaQuery({ query: theme.mediaQueries.mobileAndAbove })

  // return isDesktop ? <DesktopHome /> : <MobileHome />
  return (
    <>
      <MediaQuery query={theme.mediaQueries.mobileAndBelow}>
        <MobileHome />
      </MediaQuery>
      <MediaQuery query={theme.mediaQueries.mobileAndAbove}>
        <DesktopHome />
      </MediaQuery>
    </>
  )
}
