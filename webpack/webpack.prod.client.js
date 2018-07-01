const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths')
const commonClient = require('./webpack.common.client');

const clientTemplateSrc = paths.src.client.template

const ProdClientConfig = merge(commonClient, {
  bail: true,
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: clientTemplateSrc,
      filename: 'index.html',
      appMountId: 'app',
      inject: true,
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
