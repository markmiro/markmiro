import styled from '@emotion/styled'
import theme from './theme'

const Button = styled.button`
  border: none;

  background: ${theme.colors.c1};
  padding: ${theme.space[0]} ${theme.space[2]};

  color: inherit;
  font-family: ${theme.fonts.body};

  transition: background 100ms ease-out;
  :hover {
    color: ${theme.colors.c0};
    background: ${theme.colors.c8};
  }

  &:active {
    color: inherit;
  }
`

export default Button
