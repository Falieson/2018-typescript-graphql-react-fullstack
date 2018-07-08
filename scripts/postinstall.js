const { concurrent, } = require('nps-utils') // rimraf, setColors, series

module.exports = {
  default: concurrent.nps(
    'postinstall.mongo',
    'postinstall.build',
  ),
  mongo: 'nps mongo.setup',
  build: 'nps build.setup',
}