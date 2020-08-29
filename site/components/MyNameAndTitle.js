import styled from '@emotion/styled'
import theme from './theme'
import Link from 'next/link'

const Title = styled.div`
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights[1]};
`

const Subtitle = styled.small`
  font-size: ${theme.fontSizes[0]};
  display: block;
`

const MyNameAndTitle = () => (
  <Link href="/" passHref>
    <a style={{ color: 'inherit', lineHeight: 1 }}>
      <h1>
        <Title>Mark Miro</Title>
        <Subtitle>UI Engineer</Subtitle>
      </h1>
    </a>
  </Link>
)

export default MyNameAndTitle
