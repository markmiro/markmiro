import Page from '../../components/Page'

export function getStaticProps() {
  const extractFrontmatter = require('../../lib/extractMdxFrontmatter')
  const { createCompiler } = require('@mdx-js/mdx')
  const detectFrontmatter = require('remark-frontmatter')
  const vfile = require('vfile')

  const file = vfile(`
---
title: Hello, MDX
---
I <3 Markdown and JSX
`)

  const mdxCompiler = createCompiler({
    remarkPlugins: [detectFrontmatter, extractFrontmatter],
  })

  const { frontmatter } = mdxCompiler.processSync(file).data

  return {
    props: {
      frontmatter,
    },
  }
}

export default function Frontmatter({ frontmatter }) {
  return (
    <Page title={frontmatter.title}>
      Ex ad proident nostrud irure amet veniam enim dolor laborum non nisi
      labore. Mollit enim sint nulla sunt quis veniam ipsum ex et fugiat ad
      deserunt proident. Officia reprehenderit velit aliquip quis sit qui.
      Officia amet veniam et quis id qui sit occaecat qui sit mollit.
    </Page>
  )
}
