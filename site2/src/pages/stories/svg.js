import React from "react"

import styled from "@emotion/styled"
import MacBookPro2015Keyboard from "../../images/MacBookPro2015Keyboard.svg"

const Container = styled.div`
  padding: 40px;
  /* color: red; */
  /* tspan {
    font-family: -ap
  } */
`

export default function Svg() {
  return (
    <Container>
      <MacBookPro2015Keyboard />
    </Container>
  )
}
