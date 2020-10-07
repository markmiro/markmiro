import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import theme from "./theme"
import content from "./_siteContent"

const Title = styled.h1`
  font-size: ${theme.fontSizes[2]};
`

const Subtitle = styled.h2`
  line-height: ${theme.lineHeights[0]};
  font-size: ${theme.fontSizes[0]};
  display: block;
`

const MyNameAndTitle = () => (
  <Link to="/" style={{ color: "inherit" }}>
    <hgroup>
      <Title>{content.siteName}</Title>
      <Subtitle>{content.jobTitle}</Subtitle>
    </hgroup>
  </Link>
)

export default MyNameAndTitle
