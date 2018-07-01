const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const wpPath = path.resolve(rootPath, 'webpack')

function mkWp() {
  return path.join(wpPath, ...Object.values(arguments))
}

module.exports = {
  wp: {
    client: {
      dev: mkWp('webpack.dev.client.js'),
      prod: mkWp('webpack.prod.client.js'),
    },
    server: mkWp('webpack.dev.server.js')
  }
}
