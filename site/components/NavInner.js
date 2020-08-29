import Link from 'next/link'
import styled from '@emotion/styled'

import theme from './theme'
import navLinks from './navLinks'
import socialLinks from './socialLinks'
import Spacer from './Spacer'
import ActiveLink from './ActiveLink'
import MyNameAndTitle from './MyNameAndTitle'
import { Overline } from './Heading'
import { VStack } from './Stack'
import A from './A'

const Container = styled.nav`
  display: flex;
  flex-direction: column;
`

const NavInner = () => (
  <Container>
    <MyNameAndTitle />
    <Spacer size={4} />
    <VStack style={{ alignItems: 'start' }}>
      {navLinks.map(({ href, children }) => (
        <ActiveLink key={href} href={href}>
          {children}
        </ActiveLink>
      ))}
    </VStack>
    <Spacer size={4} />
    <Overline>Links</Overline>
    <Spacer size={0} />
    <VStack style={{ alignItems: 'start' }}>
      {socialLinks.map(({ href, children }) => (
        <Link key={href} href={href} passHref>
          <A style={{ fontSize: theme.fontSizes[-1] }}>{children}</A>
        </Link>
      ))}
    </VStack>
  </Container>
)

export default NavInner
