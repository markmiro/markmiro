import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import updated from "../prebuild/date-updated.json"
import theme from "./theme"
import Spacer from "./Spacer"
import Button from "./Button"

const FooterBox = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${theme.colors.c2};
  padding: ${theme.pagePadding};
  font-weight: ${theme.fontWeights[0]};
  font-size: ${theme.fontSizes[-1]};
`

const Footer = () => (
  <FooterBox>
    <span
      css={css`
        color: ${theme.colors.c4};
      `}
    >
      Updated {new Date(updated).toLocaleString()}
    </span>
    <Spacer size={1} />
    <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      Scroll to Top ⤴
    </Button>
  </FooterBox>
)

export default Footer
