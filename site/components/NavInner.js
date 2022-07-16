import Link from 'next/link'
import styled from '@emotion/styled'

import theme from './theme'
import content from './_siteContent'
import Spacer from './Spacer'
import ActiveLink from './ActiveLink'
import MyNameAndTitle from './MyNameAndTitle'
import { Overline } from './Heading'
import { VStack } from './Stack'
import A from './A'
import { css } from '@emotion/react'

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const NavInner = () => (
  <Container>
    <MyNameAndTitle />
    <Spacer size={4} />
    <VStack style={{ alignItems: 'start' }}>
      {content.navLinks.map(({ href, children }) => (
        <ActiveLink key={href} href={href}>
          {children}
        </ActiveLink>
      ))}
    </VStack>
    <Spacer size={4} />
    <Overline>Links</Overline>
    <Spacer size={0} />
    <VStack style={{ alignItems: 'start' }}>
      {content.socialLinks.map(({ href, children }) => (
        <ActiveLink
          key={href}
          href={href}
          css={css`
            font-size: ${theme.fontSizes[-1]};
          `}
        >
          {children}
        </ActiveLink>
      ))}
    </VStack>
  </Container>
)

export default NavInner
