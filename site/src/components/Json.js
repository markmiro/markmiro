import React from "react"
import styled from "@emotion/styled"
import theme from "./theme"

const Pre = styled.pre`
  padding: ${theme.space[1]};
  background-color: ${theme.colors.c1};
  font-size: ${theme.fontSizes[-1]};
  font-family: ${theme.fonts.mono};
  line-height: ${theme.lineHeights[0]};

  overflow: scroll;
`
const Json = ({ json }) => <Pre>{JSON.stringify(json, null, "  ")}</Pre>

export default Json
