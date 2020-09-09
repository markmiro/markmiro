const { default: styled } = require('@emotion/styled')
const { default: theme } = require('./theme')

const P = styled.p`
  line-height: ${theme.lineHeights.p};
  max-width: ${theme.measure[1]};
`

export default P
