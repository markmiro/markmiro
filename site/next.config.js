// From Next.js MDX example

const remove = require('unist-util-remove')

function removeMdxTitle() {
  return function transformer(tree, file) {
    // const node = find(tree, { type: 'heading' })
    remove(tree, 'heading')
  }
}

// https://github.com/vercel/next.js/blob/master/examples/with-mdx/next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  // options: {
  //   remarkPlugins: [removeMdxTitle],
  // },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
