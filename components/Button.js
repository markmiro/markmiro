import styled from '@emotion/styled'
import theme from './theme'

const Button = styled.button`
  color: inherit;
  border: 1px solid;
  background: transparent;
  padding: ${theme.space[0]};
  font-family: ${theme.fonts.body};
  &:active {
    color: inherit;
  }
`

export default Button
