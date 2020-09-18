import Page from '../../components/Page'

export function getStaticProps() {
  const { createCompiler } = require('@mdx-js/mdx')
  const detectFrontmatter = require('remark-frontmatter')
  const vfile = require('vfile')
  const visit = require('unist-util-visit')
  const remove = require('unist-util-remove')
  const yaml = require('yaml')

  const file = vfile(`
---
title: Hello, MDX
---
I <3 Markdown and JSX
`)

  function extractFrontmatter() {
    return function transformer(tree, file) {
      visit(tree, 'yaml', function visitor(node) {
        file.data.frontmatter = yaml.parse(node.value)
      })
      remove(tree, 'yaml')
    }
  }

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
