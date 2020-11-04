/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js')

const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/styles/variable.less'), 'utf8')
)

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = withSass(withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
  },
  sassOptions: {
    includePaths: ['styles']
  },
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders
  }) => {
    config.resolve.alias['~'] = __dirname
    config.devtool = 'cheap-module-inline-source-map';
    return config
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
    }
  },
  // assetPrefix: 'https://static.loyep.com/',
}));
