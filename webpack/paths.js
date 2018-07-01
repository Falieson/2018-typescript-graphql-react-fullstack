const path = require('path');

// const root = process.env.NODE_ENV === 'production'
//   ? process.cwd()
//   : path.resolve(process.cwd(), 'build', 'client')
// const cwd = path.resolve(process.cwd())
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
    _: path.join(srcPath),
    entry: path.join(srcPath, 'index.tsx'),
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
