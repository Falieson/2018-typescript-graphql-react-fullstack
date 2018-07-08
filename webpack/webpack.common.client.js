const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('./paths')
const common = require('./webpack.common')

const appEntryPath = paths.src.app.entry
const clientAssetPath = paths.src.app.assets
const clientBuildPath = paths.build.client._

module.exports = merge(common, {
  target: 'web',
  node: {
    __dirname: false,
    fs: 'empty'
  },
  plugins: [
    new CleanWebpackPlugin(['build/client']),
    new webpack.DefinePlugin({
      'process.env.NODE_PLATFORM': JSON.stringify(paths.CLIENT),
    }),
    new CopyWebpackPlugin([{
      from: clientAssetPath , to: paths.STATICS
    }], {
      debug: 'info'
    }),
  ],
  entry: appEntryPath,
  output: {
    filename: '[name].js',
    path: clientBuildPath,
  },
})
