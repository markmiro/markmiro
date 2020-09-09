const { createCompiler } = require('@mdx-js/mdx')
const vfile = require('vfile')
const find = require('unist-util-find')

function extractTitle() {
  return function transformer(tree, file) {
    const node = find(tree, { type: 'heading' })
    file.data.title = node.children[0].value
  }
}

function getMdxTitle(fileContents) {
  const mdxCompiler = createCompiler({
    remarkPlugins: [extractTitle],
  })

  const file = vfile(fileContents)
  const processedFile = mdxCompiler.processSync(file)
  const title = processedFile.data.title

  console.log(processedFile.contents)

  return title
}

module.exports = {
  getMdxTitle,
}
