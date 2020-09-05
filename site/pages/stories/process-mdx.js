import Page from '../../components/Page'

export function getStaticProps() {
  const { createCompiler } = require('@mdx-js/mdx')
  const vfile = require('vfile')
  const visit = require('unist-util-visit')
  const remove = require('unist-util-remove')

  const file = vfile(`
# The Title
I <3 Markdown and JSX
`)

  // https://unifiedjs.com/learn/recipe/tree-traversal/
  // const unified = require('unified')
  // const parse = require('rehype-parse')
  // const tree = unified().use(parse, { fragment: true }).parse(file)
  // console.log(tree)

  var remark = require('remark')
  var find = require('unist-util-find')

  remark()
    .use(() => {
      return (tree) => {
        const node = find(tree, { type: 'heading' })
        console.log(node, node.children[0])
      }
    })
    .processSync(
      `
import TomatoBox from 'tomato-box'
export const author = "Fred Flintstone"
export default props => <main {...props} />
# Hello, world!
Here is a paragraph
<TomatoBox />
      `
    )

  function extractTitle() {
    return function transformer(tree, file) {
      // visit(tree, 'heading', function visitor(node) {
      //   console.log(node.value)
      //   file.data.title = 'Something'
      // })
      // remove(tree, 'heading')

      const node = find(tree, { type: 'heading' })
      file.data.title = node.children[0].value
      // console.log(node, node.children[0].value)
    }
  }

  const mdxCompiler = createCompiler({
    remarkPlugins: [extractTitle],
  })

  const processedFile = mdxCompiler.processSync(file)
  const title = processedFile.data.title

  return {
    props: {
      title,
    },
  }
}

export default function ProcessMdx({ title }) {
  return (
    <Page title={title}>
      Ex ad proident nostrud irure amet veniam enim dolor laborum non nisi
      labore. Mollit enim sint nulla sunt quis veniam ipsum ex et fugiat ad
      deserunt proident. Officia reprehenderit velit aliquip quis sit qui.
      Officia amet veniam et quis id qui sit occaecat qui sit mollit.
    </Page>
  )
}
