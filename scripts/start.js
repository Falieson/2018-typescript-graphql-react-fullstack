const { concurrent, series, } = require('nps-utils') // rimraf, setColors
const paths = require('./paths')
const mongo = require('./mongo')

module.exports = {
  default: series.nps('scrub.build', 'start.dev'),
  dev: concurrent({
    server: {
      script: 'nps start.server',
      color: 'green.bold',
    },
    mongo: {
      script: 'nps start.mongo',
      color: 'blue.bold',
    },
    lint: {
      script: 'nps lint.watch',
      color: 'yellow.bold',
    },
  }),
  server: 'webpack-dev-server --config '+paths.wp.server,
  mongo: mongo.server,
}