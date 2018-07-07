const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const buildPath = path.resolve(rootPath, 'build')
const srcPath = path.resolve(rootPath, 'src')

const build = {
  _: buildPath,
  client: path.resolve(buildPath),
}

const src = {
  _: srcPath,
  app: {
    _: path.join(srcPath, 'app'),
    entry: path.join(srcPath, 'app', 'index.tsx'),
  },
  client : {
    _: path.join(srcPath, 'client'),
    template: path.join(srcPath, 'client', 'index.template.html'),
  },
}

module.exports = {
  _: rootPath,
  build,
  src,
}
