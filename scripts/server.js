const { concurrent } = require('nps-utils') // series, setColors

// in the 'open' line
// replace 'open' command with 'start' in windows, or 'gnome-open' in gnix
// sleep 30 can be adjusted to the time it takes for your machine to build
//   and the idea can be used by a team by using a .env variable

module.exports = {
  default: concurrent.nps('server.start', 'server.open'),
  start: 'npx nodemon',
  open: 'sleep 30 && open http://localhost:3000/',
  production: 'node build/server/main.js',
}
