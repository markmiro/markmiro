// Code stolen from Next.js example: https://github.com/vercel/next.js/blob/master/examples/with-linaria/next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    })

    return config
  },
})
