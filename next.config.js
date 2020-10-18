/* eslint-disable @typescript-eslint/no-var-requires */
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js')
const fs = require('fs');
const path = require('path');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
const isDev = process.env.NODE_ENV !== 'production';

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/styles/variable.less'), 'utf8')
)

// fix antd bug in dev development
// const devAntd = '@import "~antd/dist/antd.less";\n';
// const stylesData = fs.readFileSync(
//     path.resolve(__dirname, './assets/_styles.less'),
//     'utf-8',
// );
// fs.writeFileSync(
//     path.resolve(__dirname, './assets/self-styles.less'),
//     isDev ? `${devAntd}${stylesData}` : stylesData,
//     'utf-8',
// );

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {
    //
  }
}

module.exports = withBundleAnalyzer(withLess(withCSS({
  hasStaticDir: true,
  poweredByHeader: false,
  generateEtags: false,
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
      // localIdentName: '[local]___[hash:base64:5]',
    }
  },
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders
  }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config
  },
  serverRuntimeConfig: {
    isDev,
    BASE_URL: 'http://127.0.0.1:3001',
  },
  publicRuntimeConfig: {
    BASE_URL: '/api',
    // Will be available on both server and client
    staticFolder: '/static',
    isDev, // Pass through env variables
  },
})));
