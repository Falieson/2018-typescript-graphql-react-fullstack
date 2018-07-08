const { concurrent } = require('nps-utils') // series, setColors

module.exports = {
  default: concurrent.nps('server.start', 'server.open'),
  start: 'npx nodemon',
  open: 'open http://localhost:3000/', // replace 'open' command with 'start' in windows
}