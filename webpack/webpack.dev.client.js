const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const { HOST_PATH, htmlPluginOptions } = require('./config')
const commonClient = require('./webpack.common.client');

const DevClientConfig = merge(commonClient, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      ...htmlPluginOptions,
    }),
  ],
  output: {
    publicPath: HOST_PATH,
  },
})

module.exports = DevClientConfig
