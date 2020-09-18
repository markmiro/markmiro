import CodeBlock from '../components/CodeBlock'
import postCss from '../components/postCss'

import Page from './Page'

const mdxComponents = {
  wrapper: (props) => (
    <Page title={props.title}>
      <div css={postCss} {...props} />
    </Page>
  ),
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

export default mdxComponents
