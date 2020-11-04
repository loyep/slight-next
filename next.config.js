/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */

const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.alias['~'] = __dirname
    config.devtool = 'cheap-module-inline-source-map'
    return config
  },
  ...withLess({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      },
    },
  })
})
