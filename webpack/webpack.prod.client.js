const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { htmlPluginOptions } = require('./config')
const commonClient = require('./webpack.common.client');

const ProdClientConfig = merge(commonClient, {
  bail: true,
  devtool: false, // README.md
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
    }),
    new HtmlWebpackPlugin({
      ...htmlPluginOptions,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
})

module.exports = ProdClientConfig
