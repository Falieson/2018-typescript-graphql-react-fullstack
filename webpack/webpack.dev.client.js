const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const {HOST_PATH} = require('./config')
const paths = require('./paths')
const commonClient = require('./webpack.common.client');

const clientTemplateSrc = paths.src.client.template

const DevClientConfig = merge(commonClient, {
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: clientTemplateSrc,
      filename: 'index.html',
      appMountId: 'root',
      inject: true,
    }),
  ],
  output: {
    publicPath: HOST_PATH,
  },
})

module.exports = DevClientConfig
