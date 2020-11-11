import styled from "@emotion/styled"
import theme from "./theme"

const A = styled.a`
  color: ${theme.colors.c8};
  text-decoration: underline;
  text-decoration-color: ${theme.colors.c4};
  text-decoration-thickness: 1px;
  text-underline-offset: 0.15em;
  &:hover {
    text-decoration-color: ${theme.colors.c8};
  }
`

export default A
