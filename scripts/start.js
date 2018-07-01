const { concurrent, series, } = require('nps-utils') // rimraf, setColors
const paths = require('./paths.js')

module.exports = {
  default: series.nps('scrub.build', 'start.dev'),
  dev: concurrent({
    server: {
      script: 'nps start.server',
      color: 'green.bold',
    },
    lint: {
      script: 'nps lint.watch',
      color: 'yellow.bold',
    },
  }),
  server: 'webpack-dev-server --config '+paths.wp.server,
}