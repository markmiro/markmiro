const withReactSvg = require('next-react-svg')
const detectFrontmatter = require('remark-frontmatter')
const path = require('path')

const extractFrontmatter = require('./lib/extractMdxFrontmatter')

// module.exports = withReactSvg({
//   include: path.resolve(__dirname, 'assets/svg'),
// })

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
  options: {
    remarkPlugins: [detectFrontmatter, extractFrontmatter],
  },
})

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx'],
// })

module.exports = withMDX(
  withReactSvg({
    include: path.resolve(__dirname, 'assets/svg'),
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
)
