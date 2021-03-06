import styled from '@emotion/styled'
import theme from './theme'
import Link from 'next/link'
import content from './_siteContent'

const Title = styled.h1`
  font-size: ${theme.fontSizes[2]};
`

const Subtitle = styled.h2`
  line-height: ${theme.lineHeights[0]};
  font-size: ${theme.fontSizes[0]};
  display: block;
`

const MyNameAndTitle = () => (
  <Link href="/" passHref>
    <a style={{ color: 'inherit' }}>
      <hgroup>
        <Title>{content.siteName}</Title>
        <Subtitle>{content.jobTitle}</Subtitle>
      </hgroup>
    </a>
  </Link>
)

export default MyNameAndTitle
