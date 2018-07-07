const webpack = require('webpack')
const merge = require('webpack-merge');

const {HOST_PATH, APP_PORT} = require('./config')
const paths = require('./paths')
const devClient = require('./webpack.dev.client')

const clientBuildPath = paths.build.client

const DevServerConfig = merge(devClient, {
  devServer: {
    contentBase:  clientBuildPath,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: APP_PORT,
    publicPath: HOST_PATH,
    stats: {
      chunkModules: false,
      colors: true,
      path: clientBuildPath,
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = DevServerConfig
