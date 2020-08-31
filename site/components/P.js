const { default: styled } = require('@emotion/styled')
const { default: theme } = require('./theme')

const P = styled.p`
  line-height: ${theme.lineHeights[0]};
`

export default P