// ## opts for helpers
const {
  APP_PORT = 3000,
  HOST_NAME = 'localhost',
} = process.env

const HOST_PATH = 'http://'+HOST_NAME+':'+APP_PORT+'/'

const paths = require('./paths')
const htmlPluginOptions = {
  template: paths.src.client.template,
  filename: 'index.html',
  appMountId: 'root',
  inject: true,
}

module.exports = {
  HOST_PATH,
  htmlPluginOptions,
}
