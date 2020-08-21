const { styled } = require('linaria/react')
const { default: theme } = require('./theme')

const Button = styled.button`
  border: 1px solid;
  background: transparent;
  padding: ${theme.space[0]};
  font-family: ${theme.fonts.body};
  &:active {
    color: inherit;
  }
`

export default Button
