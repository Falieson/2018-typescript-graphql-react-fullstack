const { concurrent, series, } = require('nps-utils') // rimraf, setColors

module.exports = {
  default: series.nps('scrub.build', 'start.dev'),
  dev: concurrent({
    build: {
      script: 'nps build.watch',
      color: 'green.bold',
    },
    server: {
      script: 'nps server',
      color: 'magenta.bold',
    },
    mongo: {
      script: 'nps mongo.server',
      color: 'blue.bold',
    },
    lint: {
      script: 'nps lint.watch',
      color: 'yellow.bold',
    },
  }),
  server: 'nps server',
  production: 'nps server.production',
  mongo: 'nps mongo.server',
}
