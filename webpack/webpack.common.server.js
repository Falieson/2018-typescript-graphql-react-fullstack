const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./paths')
const common = require('./webpack.common')

const serverEntryPath = paths.src.server.entry
const serverAssetPath = paths.src.server.assets
const serverBuildPath = paths.build.server._

module.exports = merge(common, {
  externals: [nodeExternals()],
  target: 'node',
  plugins: [
    new CleanWebpackPlugin(['build/server']),
    new webpack.DefinePlugin({
      'process.env.NODE_PLATFORM': JSON.stringify(paths.SERVER),
    }),
    new CopyWebpackPlugin([{
      from: serverAssetPath, to: paths.STATICS
    }], {
      debug: 'info'
    }),
  ],
  entry: serverEntryPath,
  output: {
    filename: '[name].js',
    path: serverBuildPath,
  },
})
