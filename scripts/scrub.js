const { series, rimraf, } = require('nps-utils') // concurrent, setColors

module.exports = {
  build: rimraf('build/'),
  npm: {
    default: series.nps('scrub.npm.cache', 'scrub.npm.folders'), // 'scrub.npm.reinstall'
    cache: 'npm cache clean --force',
    folders: rimraf('node_modules'),
    // reinstall: 'npm install -D', // doesn't work b/c nps-utils is removed
  },
}
