const withLess = require("@zeit/next-less");
const fs = require('fs');
const {
    DefinePlugin
} = require('webpack');
const path = require('path');
const withCSS = require('@zeit/next-css');

const {
    parsed
} = require('dotenv').config();
const {
    BASE_URL
} = parsed;

const isDev = process.env.NODE_ENV !== 'production';

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
    require.extensions['.less'] = file => {}
}

module.exports = withLess(withCSS({
    hasStaticDir: true,
    lessLoaderOptions: {
        lessOptions: {
            javascriptEnabled: true,
            localIdentName: '[local]___[hash:base64:5]',
        }
    },
    webpack: (config, {
        buildId,
        dev,
        isServer,
        defaultLoaders
    }) => {
        return config
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
        isDev, // Pass through env variables
    },
}));