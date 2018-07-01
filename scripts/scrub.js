const { series, rimraf, } = require('nps-utils') // concurrent, setColors

module.exports = {
  build: rimraf('build/'),
  npm: {
    default: series.nps('scrub.npm.cache', 'scrub.npm.folders'),
    cache: 'npm cache clean --force',
    folders: rimraf('node_modules'),
  },
}
