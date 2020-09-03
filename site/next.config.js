const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/svg'),
  webpack(config, options) {
    return config
  },
})

// From Next.js MDX example
// https://github.com/vercel/next.js/blob/master/examples/with-mdx/next.config.js
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// })

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx'],
// })
