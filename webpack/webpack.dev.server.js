const webpack = require('webpack')
const merge = require('webpack-merge')

const commonServer = require('./webpack.common.server');

const DevServerConfig = merge(commonServer, {
  devtool: 'source-map',
  mode: 'development',
  node: {
    net: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = DevServerConfig
