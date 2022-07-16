import styled from '@emotion/styled'
import theme from './theme'

const Button = styled.button`
  box-shadow: 0 0.1em 2px #00000033;
  border-radius: 0.1em;
  border: 1px solid;

  background: transparent;
  padding: ${theme.space[0]} ${theme.space[2]};

  color: inherit;
  font-family: ${theme.fonts.body};

  transition: background 100ms ease-out;
  :hover {
    background: ${theme.colors.c1};
  }

  &:active {
    color: inherit;
  }
`

export default Button
