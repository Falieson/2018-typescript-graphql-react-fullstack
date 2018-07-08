const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'src')

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

module.exports = {
  _: rootPath,
  build,
  src,
  STATICS,
  CLIENT,
  SERVER,
}
