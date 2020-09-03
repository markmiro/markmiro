// From Next.js MDX example
// https://github.com/vercel/next.js/blob/master/examples/with-mdx/next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
