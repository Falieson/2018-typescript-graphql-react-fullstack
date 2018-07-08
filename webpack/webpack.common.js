const Dotenv = require('dotenv-webpack');
const fs = require('fs')
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin');

const { isProd } = require('./config')
const paths = require('./paths')

// #  RULES
// ## TS w/ BABEL
const tsOptions = {
  context: paths._,
  configFile: path.resolve(paths._, 'tsconfig.json'),
  transpileOnly: true,
}
const typescript = {
  test: /\.tsx?$/,
  include: paths.src._,
  use: [
    {
      loader: 'babel-loader',
      options: {
        babelrc: true,
      }
    },
    {
      loader: 'ts-loader',
      options: tsOptions
    }
  ]
}
// ## GRAPHQL
// const graphql = {
//   test: /\.(graphql|gql)$/,
//   exclude: /node_modules/,
//   loader: 'graphql-tag/loader',
// }
// ## STYLES
const styles = {
  test: /\.s?css$/,
  loaders: ["style-loader", "css-loader", "sass-loader"],
}
// ## FILES like csv and images
const files = {
  // test: /\.(png|jpg|gif)$/,
  exclude: [/\.jsx?$/, /\.tsx?$/, /\.s?css$/, /\.html$/, /\.json$/],
  use: [
    {
      loader: 'file-loader',
      options: {
        name (file) {
          if (process.env === 'development' || process.env === undefined) {
            return '[path][name].[ext]'
          }

          return '[hash].[ext]'
        }
      }
    }
  ]
}

const dotEnvOpts = (() => {
  /** dotEnvIfExists
   *
   * Uses .env.development for default values
   */
  const dotEnvIfExists = (() => {
    const envPath = path.join(paths._, '.env')
    const defaultEnvPath = envPath+'.development'

    const envExists = fs.existsSync(envPath)
    return envExists
      ? envPath
      : defaultEnvPath
  })()

  return {
    path: dotEnvIfExists, // path.join(paths._, '.env'), //  dotEnvIfExists,
    // load '.env.development' to verify the '.env' variables are all set.
    safe: path.join(paths._, '.env')+'.development',
    // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    systemvars: true,
    // hide any errors
    // silent: true
  }
})()

module.exports = {
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.csv', '.ts', '.tsx', '.js', '.json', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      typescript,
      // graphql,
      styles,
      files,
    ],
  },
  plugins: [
    new WriteFilePlugin({ log: true }),
    // NOTE: Dotenv must be loaded before webpack.DefinePlugin (in `webpack.common.client`)
    new Dotenv(dotEnvOpts)
  ],
};
