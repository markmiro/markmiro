/**
 * @type {import('next').NextConfig}
 */

const config = {
  // https://melvingeorge.me/blog/set-html-lang-attribute-in-nextjs
  // Adds "en" to html tag
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
}

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })

  module.exports = withBundleAnalyzer(config)
} else {
  module.exports = config
}
