const paths = require('./paths.js')
const fs = require('fs')
const checkNewDirectory = (target) => fs.existsSync(target) == false

module.exports = {
  default: 'nps mongo.client',
  description: 'start a mongo client to the local dev server',
  client: 'mongo weather --port 27000',
  server: 'mongod --dbpath ./db/ --port 27000',
  setup: checkNewDirectory('db') ? 'mkdir -p db/' : 'echo "db directory exists"'
}
