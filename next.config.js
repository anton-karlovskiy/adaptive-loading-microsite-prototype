
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');

module.exports = withTM(withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    return config;
  },
  transpileModules: ['react-syntax-highlighter']
}));