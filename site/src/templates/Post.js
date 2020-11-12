import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import Page from "../components/Page"
import Json from "../components/Json"
import postCss from "../components/postCss"
import A from "../components/A"
import { TableOfContents } from "../components/TableOfContents"
import theme from "../components/theme"
import Spacer from "../components/Spacer"

const shortcodes = { a: A } // Provide common components here

export default function Post({ data: { mdx } }) {
  return (
    <Layout>
      {/* <Json json={mdx.frontmatter} /> */}
      <Page
        title={mdx.frontmatter.title}
        sidebar={
          mdx.frontmatter.tocDepth && (
            <>
              <div
                css={css`
                  font-weight: ${theme.fontWeights[2]};
                `}
              >
                Table of Contents
              </div>
              <Spacer size={1} />
              <div
                css={css`
                  font-size: ${theme.fontSizes[-1]};
                  line-height: ${theme.lineHeights[0]};
                `}
              >
                <TableOfContents
                  depth={mdx.frontmatter.tocDepth}
                  items={mdx.tableOfContents.items}
                />
              </div>
            </>
          )
        }
      >
        <div css={postCss}>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </Page>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      slug
      body
      frontmatter {
        title
        tocDepth
      }
      tableOfContents
    }
  }
`
