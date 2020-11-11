import { css } from "@emotion/core"
import theme from "./theme"

const biggestSpacing = 6
const indent1 = 2
const indent2 = 5

const spacingCss = css`
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > *,
  p {
    margin-top: ${theme.space[3]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${theme.lineHeights.heading};
    margin-top: ${theme.space[4]};
    margin-bottom: ${theme.space[2]};
  }

  ul,
  lo {
    margin-top: ${theme.space[0]};
  }
  li {
    margin-top: ${theme.space[0]};
  }

  hr {
    margin-top: ${theme.space[biggestSpacing]};
    margin-bottom: ${theme.space[biggestSpacing]};
  }
`

const headingCss = css`
  h1 {
    font-weight: ${theme.fontWeights[2]};
    font-size: ${theme.fontSizes[3]};
    padding-bottom: 0.2em;
    border-bottom: 1px solid ${theme.colors.c2};
  }
  h2 {
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights[2]};
    padding-bottom: 0.2em;
    border-bottom: 1px solid ${theme.colors.c2};
  }
  h3 {
    font-size: ${theme.fontSizes[1]};
    font-weight: ${theme.fontWeights[2]};
  }
  h4 {
    font-size: ${theme.fontSizes[0]};
    font-weight: ${theme.fontWeights[2]};
  }
  h5 {
    font-size: ${theme.fontSizes[-1]};
    font-weight: ${theme.fontWeights[2]};
  }
  h6 {
    /* From <Overline /> component in Heading.js */
    text-transform: uppercase;
    letter-spacing: ${theme.letterSpacings[1]};
    font-weight: ${theme.fontWeights[1]};

    font-size: ${theme.fontSizes[-2]};
  }

  ${"" /* Or do this ? https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup */}
  h1 small {
    font-size: 1rem; /* Reset size */
    font-weight: ${theme.fontWeights[1]};
    color: ${theme.colors.c6};
    display: block;
    margin: 0.5em 0;
  }
`

const listsCss = css`
  ul,
  ol {
    padding-left: ${theme.space[indent2]};
    list-style-position: outside;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
`

const tableCss = css`
  th {
    border: 1px solid ${theme.colors.c2};
    font-weight: ${theme.fontWeights[2]};
  }
  th,
  td {
    padding: ${theme.space[0]} ${theme.space[indent1]};
  }
  td {
    border: 1px solid ${theme.colors.c2};
  }
`

const miscElementsCss = css`
  a {
    color: ${theme.colors.blue};
    &:hover {
      text-decoration-color: ${theme.colors.blue};
    }
  }
  b,
  strong {
    font-weight: ${theme.fontWeights[2]};
  }

  i,
  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  mark {
    color: inherit;
    padding: 0.1em 0.2em;
    background: ${theme.colors.highlight};
  }

  blockquote {
    border-left: 1px solid ${theme.colors.c4};
    padding: 0 ${theme.space[indent1]};
  }

  ${"" /* task-list styles are for styling bullet points when going from markdown to html */}
  ${"" /* .contains-task-list {
    padding: 0;
  }
  .task-list-item {
    list-style-type: none;
  } */}

  img {
    max-width: 100%;
    display: block;
    border: 1px solid ${theme.colors.c2};
    padding: ${theme.space[1]};
  }

  pre {
    background-color: ${theme.colors.c1};
    padding: ${theme.space[1]} ${theme.space[2]};
    overflow: scroll;
  }

  code {
    font-size: ${theme.fontSizes[-1]};
    font-family: ${theme.fonts.mono};
  }

  h1 code,
  h2 code,
  h3 code,
  h4 code,
  h5 code,
  h6 code,
  table code,
  p code,
  li code {
    background-color: ${theme.colors.c2};
    padding: 0.2em 0.3em;
  }

  ${"" /* Copy HR style from medium.com */}
  hr {
    border: none;
    width: 100%;
    height: 1px;
    position: relative;
  }
  hr:after {
    content: "•••";
    letter-spacing: 0.5em;
    font-size: ${theme.fontSizes[-1]};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  dl {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: ${theme.space[0]};
  }
  dt {
    text-align: right;
    font-weight: ${theme.fontWeights[2]};
  }
`

const formElementsCss = css`
  button,
  textarea,
  input,
  select {
    font-size: inherit;
    font-family: inherit;
    margin: 0;
    border: 1px solid currentColor;
    background-color: transparent;
    color: inherit;
    border-radius: 0;
    &:disabled {
      opacity: 0.6;
    }
  }

  label,
  textarea {
    display: block;
  }

  input:not(:matches([type="radio"], [type="checkbox"])),
  textarea,
  select,
  button {
    width: 100%;
  }

  input::placeholder {
    color: ${theme.colors.c6};
  }
`

const postCss = css`
  line-height: ${theme.lineHeights[0]};
  ${spacingCss}
  ${headingCss}
  ${listsCss}
  ${tableCss}
  ${miscElementsCss}
  ${formElementsCss}
`

export default postCss
