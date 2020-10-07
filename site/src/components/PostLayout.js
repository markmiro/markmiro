import React from "react"

import Layout from "./Layout"
import Page from "./Page"
import postCss from "./postCss"

export default function PostLayout({ title, children }) {
  return (
    <Layout>
      <Page title={title}>
        <div css={postCss}>{children}</div>
      </Page>
    </Layout>
  )
}
