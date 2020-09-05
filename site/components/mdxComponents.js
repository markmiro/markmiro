import { css } from '@emotion/core'

import theme from './theme'
import Page from './Page'
import CodeBlock from '../components/CodeBlock'
import Hr from '../components/Hr'

const mdxCss = css`
  line-height: ${theme.lineHeights[0]};

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > * {
    margin-top: ${theme.space[2]};
  }

  p,
  pre, table {
    margin-top: ${theme.space[2]};
    /* margin-bottom: ${theme.space[2]}; */
  }

  ul,
  lo {
    margin-top: ${theme.space[0]};
    /* margin-bottom: ${theme.space[0]}; */
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: ${theme.space[5]};
    margin-bottom: ${theme.space[4]};
  }
  h1 {
    ${
      '' /* margin-top: ${theme.space[7]};
    margin-bottom: ${theme.space[6]}; */
    }
    font-size: ${theme.fontSizes[3]};
  }
  h2 {
    ${
      '' /* margin-top: ${theme.space[6]};
    margin-bottom: ${theme.space[5]}; */
    }
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights[2]};
    border-bottom: 1px solid;
  }
  h3 {
    ${
      '' /* margin-top: ${theme.space[5]};
    margin-bottom: ${theme.space[4]}; */
    }
    font-size: ${theme.fontSizes[1]};
    font-weight: ${theme.fontWeights[2]};
  }
  h4 {
    ${
      '' /* margin-top: ${theme.space[4]};
    margin-bottom: ${theme.space[3]}; */
    }
    font-size: ${theme.fontSizes[0]};
    font-weight: ${theme.fontWeights[2]};
  }
  h5 {
    ${
      '' /* margin-top: ${theme.space[3]};
    margin-bottom: ${theme.space[2]}; */
    }
    font-size: ${theme.fontSizes[-1]};
    font-weight: ${theme.fontWeights[2]};
  }
  h6 {
    ${
      '' /* margin-top: ${theme.space[2]};
    margin-bottom: ${theme.space[1]}; */
    }

    /* From <Overline /> component in Heading.js */
    text-transform: uppercase;
    letter-spacing: ${theme.letterSpacings[1]};
    font-weight: ${theme.fontWeights[1]};

    font-size: ${theme.fontSizes[-2]};
  }

  b,
  strong {
    font-weight: ${theme.fontWeights[2]};
  }

  i, em {
    font-style: italic;
  }

  blockquote {
    border-left: 1px solid ${theme.colors.c2};
    padding: ${theme.space[2]};
  }

  code {
    font-family: ${theme.fonts.mono};
  }

  ul,
  ol {
    padding-left: ${theme.space[5]};
    list-style-position: outside;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  li {
    margin-top: ${theme.space[0]};
  }

  table {
    /* border: 1px solid ${theme.colors.c2}; */
    width: 100%;
  }
  tr {
    /* border-bottom: 1px solid ${theme.colors.c2}; */
  }
  th {
    /* text-align: left; */
    font-weight: ${theme.fontWeights[2]};
    border-bottom: 2px solid;
    background-color: ${theme.colors.c2};
    border-left: 1px solid ${theme.colors.c4};
  }
  th:first-child {
    border-left: none;
  }
  th, td {
    padding: ${theme.space[1]} ${theme.space[2]};
  }
  td {
    border: 1px solid ${theme.colors.c2};
  }

  del {
    text-decoration: line-through;
  }

  .contains-task-list {
    padding: 0;
  }
  .task-list-item {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  pre {
    padding: ${theme.space[2]};
    background-color: ${theme.colors.c2};
    font-size: ${theme.fontSizes[-1]};
    overflow: scroll;
  }
`

const mdxComponents = {
  wrapper: (props) => (
    <Page title={props.title}>
      <div css={mdxCss} {...props} />
    </Page>
  ),
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  a: (props) => (
    <a
      {...props}
      css={css`
        border-bottom: 1px solid;
      `}
    />
  ),
  hr: Hr,
}

export default mdxComponents
