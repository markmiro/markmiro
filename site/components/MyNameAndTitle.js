import styled from '@emotion/styled'
import theme from './theme'
import Link from 'next/link'
import content from './_siteContent'

const Title = styled.div`
  font-size: ${theme.fontSizes[2]};
`

const Subtitle = styled.small`
  line-height: ${theme.lineHeights[0]};
  font-size: ${theme.fontSizes[0]};
  display: block;
`

const MyNameAndTitle = () => (
  <Link href="/" passHref>
    <a style={{ color: 'inherit' }}>
      <h1>
        <Title>{content.siteName}</Title>
        <Subtitle>{content.jobTitle}</Subtitle>
      </h1>
    </a>
  </Link>
)

export default MyNameAndTitle
