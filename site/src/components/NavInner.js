import React from "react"
import styled from "@emotion/styled"

import theme from "./theme"
import content from "./_siteContent"
import Spacer from "./Spacer"
import MyNameAndTitle from "./MyNameAndTitle"
import { Overline } from "./Heading"
import { VStack } from "./Stack"
import Link from "./Link"
import A from "./A"

const Container = styled.nav`
  display: flex;
  flex-direction: column;
`

const NavInner = () => (
  <Container>
    <MyNameAndTitle />
    <Spacer size={4} />
    <VStack style={{ alignItems: "start" }}>
      {content.navLinks.map(({ href, children }) => (
        <Link key={href} to={href}>
          {children}
        </Link>
      ))}
    </VStack>
    <Spacer size={4} />
    <Overline>Links</Overline>
    <Spacer size={0} />
    <VStack style={{ alignItems: "start" }}>
      {content.socialLinks.map(({ href, children }) => (
        <A key={href} href={href} style={{ fontSize: theme.fontSizes[-1] }}>
          {children}
        </A>
      ))}
    </VStack>
  </Container>
)

export default NavInner
