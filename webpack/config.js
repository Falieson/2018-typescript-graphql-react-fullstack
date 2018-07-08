// ## opts for helpers
const {
  APP_PORT = 3000,
  HOST_NAME = 'localhost',
} = process.env

const HOST_PATH = 'http://'+HOST_NAME+':'+APP_PORT+'/'

module.exports = {
  HOST_PATH,
}
