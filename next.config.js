/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')
const path = require('path')
const loaderUtils = require("loader-utils");

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withSass(withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    camelCase: true,
    localIdentName: '[path][name]_[local]__[hash:5]',
    getLocalIdent: (loaderContext, localIdentName, localName, options) => {
      const fileName = path.basename(loaderContext.resourcePath)
      const name = fileName.replace(/\.[^/.]+$/, '')
      if (name.endsWith('.module')) {
        return getLocalIdent(loaderContext, localIdentName, localName, options)
      }
      return localName
    },
  },
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders
  }) => {
    config.resolve.alias['~'] = __dirname
    config.devtool = 'cheap-module-inline-source-map'
    return config
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
}))

function getLocalIdent(loaderContext, localIdentName, localName, options) {
  if (!options.context) {
    if (loaderContext.rootContext) {
      options.context = loaderContext.rootContext;
    } else if (loaderContext.options && typeof loaderContext.options.context === "string") {
      options.context = loaderContext.options.context;
    } else {
      options.context = loaderContext.context;
    }
  }
  let request = path.relative(options.context, loaderContext.resourcePath);
  const parsed = path.parse(request);
  const directory = parsed.dir.replace(new RegExp("^(components|pages)\/", "g"), '');
  const basename = parsed.name.replace(new RegExp('.module$'), '');
  const content = options.hashPrefix + request + "+" + localName;
  const url = localIdentName.replace(/\[local\]/gi, localName)
    .replace(/\[name\]/gi, '-' + basename)
    .replace(/\[path\]/gi, directory)
    .replace(
      /\[(?:([^:\]]+):)?(?:hash|contenthash)(?::([a-z]+\d*))?(?::(\d+))?\]/gi,
      (all, hashType, digestType, maxLength) =>
      loaderUtils.getHashDigest(content, hashType, digestType, parseInt(maxLength, 10))
    )
    .replace(/\[emoji(?::(\d+))?\]/gi, (all, length) =>
      encodeStringToEmoji(content, parseInt(length, 10))
    )
    .replace(new RegExp("[^a-zA-Z0-9\\-_\u00A0-\uFFFF]", "g"), "-")
    .replace(/^((-?[0-9])|--)/, "_$1");

  console.log('url: ', url);
  return url;
};
