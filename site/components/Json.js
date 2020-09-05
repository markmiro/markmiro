import styled from '@emotion/styled'
import theme from './theme'

const Pre = styled.pre`
  line-height: ${theme.lineHeights[0]};
`
const Json = ({ json }) => <Pre>{JSON.stringify(json, null, '  ')}</Pre>

export default Json
