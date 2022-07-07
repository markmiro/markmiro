/**
 * @type {import('next').NextConfig}
 */

const config = {
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
