import styled from '@emotion/styled'

import ActiveLink from './ActiveLink'
import { Overline } from './Heading'
import MyNameAndTitle from './MyNameAndTitle'
import Spacer from './Spacer'
import { VStack } from './Stack'
import theme from './theme'
import content from './_siteContent'

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const NavInner = () => (
  <Container>
    <MyNameAndTitle />
    <Spacer size={4} />
    <VStack as="ul" style={{ alignItems: 'start' }}>
      {content.navLinks.map(({ href, children }) => (
        <li>
          <ActiveLink key={href} href={href}>
            {children}
          </ActiveLink>
        </li>
      ))}
    </VStack>
    <Spacer size={4} />
    <Overline>Links</Overline>
    <Spacer size={0} />
    <VStack
      as="ul"
      style={{ alignItems: 'start', fontSize: theme.fontSizes[-1] }}
    >
      {content.socialLinks.map(({ href, children, Icon }) => (
        <li>
          <ActiveLink key={href} href={href}>
            <Icon size={16} strokeWidth={1.5} /> {children}
          </ActiveLink>
        </li>
      ))}
    </VStack>
  </Container>
)

export default NavInner
