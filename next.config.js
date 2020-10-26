/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js')

const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
});

const isDev = process.env.NODE_ENV !== 'production';

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/styles/variable.less'), 'utf8')
)

module.exports = withBundleAnalyzer(withCSS(withSass({
  cssModules: true,
  ...withLess({
    hasStaticDir: true,
    poweredByHeader: false,
    generateEtags: false,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]_[name]_[hash:base64:5]',
    },
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      }
    },
    webpack: (config, {
      buildId,
      dev,
      isServer,
      defaultLoaders
    }) => {
      config.resolve.alias['@'] = __dirname
      return config
    },
    serverRuntimeConfig: {
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
    },
  })
})));
