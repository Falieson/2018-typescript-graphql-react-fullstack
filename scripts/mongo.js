const {mkNewDirectory} = require('./_helpers')

module.exports = {
  default: 'nps mongo.client',
  description: 'start a mongo client to the local dev server',
  client: 'mongo --port 27000',
  // client.prod uses .env file PROD_* for connection details to prod server
  server: 'mongod --dbpath ./db/ --port 27000',
  setup: mkNewDirectory('db') ? 'mkdir -p db/' : 'echo "db directory exists"'
}
