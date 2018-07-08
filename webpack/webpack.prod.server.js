const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const commonServer = require('./webpack.common.server');

module.exports = merge(commonServer, {
  bail: true,
  devtool: false, // README.md
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
    }),
  ],
})
