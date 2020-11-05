/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')
const getLocalIdent = require('@zeit/next-css/node_modules/css-loader/lib/getLocalIdent')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[path][name]_[local]__[hash:5]',
    getLocalIdent: (loaderContext, localIdentName, localName, options) => {
      const fileName = _path.basename(loaderContext.resourcePath)
      const name = fileName.replace(/\.[^/.]+$/, '')
      if (name.endsWith('.module')) {
        return getLocalIdent(loaderContext, localIdentName, localName, options)
      }
      return localName
    },
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
  }),
})
