const path = require('path');
const rootPath = path.resolve(__dirname, '..')

const STATICS = 'assets'
const APP = 'app'
const CLIENT = 'client'
const SERVER = 'server'

const build = (() => {
  const _build = path.resolve(rootPath, 'build')
  const _app = path.resolve(_build, APP)
  const _client = path.resolve(_build, CLIENT)
  const _server = path.resolve(_build, SERVER)

  return {
    _: _build,
    client: {
      _: _client,
    },
    app: {
      _: _app,
      assets: path.resolve(_app, STATICS),
    },
    server: {
      _: _server,
      assets: path.resolve(_server, STATICS),
    },
  }
})()

const src = (() => {
  const srcPath = path.resolve(rootPath, 'src')
  const _app = path.join(srcPath, APP)
  const _client = path.join(srcPath, CLIENT)
  const _server = path.join(srcPath, SERVER)

  return {
    _: srcPath,
    app: {
      _: _app,
      entry: path.join(_app, 'index.tsx'),
      assets: path.join(_app, STATICS),
    },
    client : {
      _: _client,
      template: path.join(_client, 'index.template.html'),
    },
    server: {
      _: _server,
      assets: path.join(_server, STATICS),
      entry: path.join(_server,  'index.ts'),
    }
  }
})()

const watchPaths = (() => {
  const P = 'src/'
  const A = P+APP+'/'
  const C = P+CLIENT+'/'
  const S = P+SERVER+'/'
  const W = 'webpack/'
  const X = '**/'

  const commonPaths = [
    '.env',
    '.env.development',
    // NOTE: this file and other shared
    'scripts/_*.js',
    'tslint.json',
    'tsconfig.json',
    'package.json',
    P+'gql/*',
    P+'gql/'+X+'*',
    P+'gql/'+X+X+'*',
    P+'helpers/*',
    P+'helpers/'+X+'*',
    P+'helpers/'+X+X+'*',
    W+'*.common.js',
    W+'paths.js',
    W+'config.js',
  ]

  return Object.assign({}, {
    // chokidar doesn't run unless that level of the heirarchy is called...
    client: [
      C+'*',
      A+'*.ts',
      A+'*.tsx',
      A+X+'*.ts',
      A+X+'*.tsx',
      A+X+X+'*.ts',
      A+X+X+'*.tsx',
      A+X+X+X+'*.ts',
      A+X+X+X+'*.tsx',
      A+'assets/*',
      A+'assets/'+X+'*',
      A+'assets/'+X+X+'*',
      W+'*.client.js',
      W+X+'*.client.js',
      W+X+X+'*.client.js',
      ...commonPaths
    ].join(' '),
    server: [
      S+'*.ts',
      S+'*.tsx',
      S+X+'*.ts',
      S+X+'*.tsx',
      S+X+X+'*.ts',
      S+X+X+'*.tsx',
      S+X+X+X+'*.ts',
      S+X+X+X+'*.tsx',
      S+'assets/*',
      S+'assets/'+X+'*',
      S+'assets/'+X+X+'*',
      W+'*.server.js',
      W+X+'*.server.js',
      W+X+X+'*.server.js',
      ...commonPaths
    ].join(' '),
  })
})()

const wpPaths = (() => {
  const _wpPath = path.resolve(rootPath, 'webpack')
  function mkWp() {
    return path.join(_wpPath, ...Object.values(arguments))
  }

  return {
    client: {
      dev: mkWp('webpack.dev.client.js'),
      prod: mkWp('webpack.prod.client.js'),
    },
    server: {
      dev: mkWp('webpack.dev.server.js'),
      prod: mkWp('webpack.prod.server.js'),
    }
  }
})()

module.exports = {
  rootPath,
  build,
  src,
  wp: wpPaths,
  watch: watchPaths,
}
