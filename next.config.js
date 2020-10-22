/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js')

const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
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

module.exports = withOffline(withBundleAnalyzer(withLess(withCSS({
  hasStaticDir: true,
  poweredByHeader: false,
  // assetPrefix: 'https://static.loyep.com/',
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
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    isDev, // Pass through env variables
  },
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}))));
