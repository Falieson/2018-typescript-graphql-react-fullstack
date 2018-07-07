// # Global configuration settings

const {
  APP_PORT = 3000,
  HOST_NAME = '0.0.0.0',
  NODE_ENV = 'dev',
} = process.env

// ## Helpers based on the above
const isProd = NODE_ENV === 'prod'
const HOST_PATH = 'http://'+HOST_NAME+':'+APP_PORT+'/'

module.exports = {
  APP_PORT,
  HOST_NAME,
  NODE_ENV,

  isProd,
  HOST_PATH,
}
