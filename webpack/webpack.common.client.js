const webpack = require('webpack');
const merge = require('webpack-merge');

const paths = require('./paths')
const common = require('./webpack.common')

const clientBuildPath = paths.build.client

module.exports = merge(common, {
  entry: paths.src.app.entry,
  target: 'web',
  node: {
    __dirname: false,
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_PLATFORM': JSON.stringify('client'),
      }
    }),
  ],
  output: {
    filename: '[name].js',
    path: clientBuildPath,
  },
})
