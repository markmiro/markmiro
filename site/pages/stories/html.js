import styled from '@emotion/styled'
import postCss from '../../components/postCss'
import theme from '../../components/theme'
import HtmlKitchenSink from '../../components/HtmlKitchenSink'

const Article = styled.article`
  width: 40em;
  max-width: 100%;
  margin: 0 auto;
  padding: 4vw ${theme.space[4]};
  @media ${theme.mediaQueries.mobileSmallAndAbove} {
    padding: 7vw ${theme.space[4]};
  }
`

const Html = () => (
  <Article>
    <div css={postCss}>
      <HtmlKitchenSink />
    </div>
  </Article>
)

export default Html
