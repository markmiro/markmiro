// Stolen from: https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import syntaxTheme from 'prism-react-renderer/themes/oceanicNext'
import { css } from '@emotion/core'

import theme from './theme'

const containerCss = css`
  font-family: ${theme.fonts.mono};
  overflow: scroll;
  padding: ${theme.space[2]};
  font-size: ${theme.fontSizes[-1]};
`

const lineCss = css`
  line-height: ${theme.lineHeights[0]};
`

export default function CodeBlock({ children, className = '' }) {
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      theme={syntaxTheme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          css={containerCss}
          style={{
            ...style,
          }}
        >
          {tokens.map(
            (line, i) =>
              !(i === tokens.length - 1 && line[0].empty) && (
                <div key={i} css={lineCss} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
          )}
        </pre>
      )}
    </Highlight>
  )
}
