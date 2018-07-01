const webpack = require('webpack')
const merge = require('webpack-merge');
const devClient = require('./webpack.dev.client')

const paths = require('./paths')
const clientBuildPath = paths.build.client
const HOST = 'http://0.0.0.0'
const PORT = 3000
const HOST_PATH = HOST+':'+PORT+'/'

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
    port: PORT,
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
