const webpack = require('webpack')
const merge = require('webpack-merge')

const {
  HOST_PATH,
  APP_PORT,
} = require('./config')
const paths = require('./paths')
const commonServer = require('./webpack.common.server');

const clientBuildPath = paths.build.client

const DevServerConfig = merge(commonServer, {
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = DevServerConfig
