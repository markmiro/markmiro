import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "./Layout"
import Page from "./Page"
import postCss from "./postCss"

export default function PostLayout({ children }) {
  const data = useStaticQuery(graphql`
    {
      mdx {
        frontmatter {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Page title={data.mdx.frontmatter.title}>
        <div css={postCss}>{children}</div>
      </Page>
    </Layout>
  )
}
