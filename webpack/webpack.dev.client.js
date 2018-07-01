const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const paths = require('./paths')
const commonClient = require('./webpack.common.client');

const clientTemplateSrc = paths.src.client.template

const HOST = 'http://localhost'
const PORT = 3000
const HOST_PATH = HOST+':'+PORT+'/'

const DevClientConfig = merge(commonClient, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: clientTemplateSrc,
      filename: 'index.html',
      appMountId: 'app',
      inject: true,
    }),
  ],
  output: {
    publicPath: HOST_PATH,
  },
})

module.exports = DevClientConfig
