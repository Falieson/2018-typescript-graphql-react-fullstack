const { concurrent } = require('nps-utils') // series, setColors

// in the 'open' line
// replace 'open' command with 'start' in windows, or 'gnome-open' in gnix


/** `nps server.open`
 *
 * sleep N can be adjusted to the time it takes for your machine to build
 *   and the idea can be used by a team by using a .env variable
 *
**/

const BUILD_DELAY=12

module.exports = {
  default: concurrent.nps('server.start', 'server.open'),
  start: 'npx nodemon',
  open: 'sleep '+BUILD_DELAY+' && nps open.web & sleep '+BUILD_DELAY+' && nps open.gql',
  production: 'node build/server/main.js',
}
