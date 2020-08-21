const { styled } = require('linaria/react')
const { default: theme } = require('./theme')

const A = styled.a`
  color: inherit;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 0.5px solid ${theme.colors.neutral.dark};
`
export default A
