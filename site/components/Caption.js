import React from 'react'
import styled from '@emotion/styled'
import theme from './theme'
import { VStack } from './Stack'

const Caption = styled.figcaption`
  font-size: ${theme.fontSizes[-1]};
  color: ${theme.colors.c6};
  text-align: center;
  max-width: ${theme.measure[0]};
  margin-left: auto;
  margin-right: auto;
`

export function Captioned({ children }) {
  return (
    <figure>
      <VStack space={0}>{children}</VStack>
    </figure>
  )
}

export default Caption
