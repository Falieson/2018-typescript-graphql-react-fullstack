const { series, concurrent} = require('nps-utils') // rimraf, setColors
const {
  mkNewDirectory,
  watch,
} = require('./_helpers')
const _paths = require('./_paths.js')

const concurrentBuild = type => { // dev or prod or watch
  const client = (() => {
    const obj = {}
    obj[type === 'watch' ? 'app' : type] = {
      script: 'nps build.'+type+'.client',
      color: type === 'watch' ? 'yellow.bold' : 'green.bold',
    }
    return obj
  })()

  const server = (() => {
    const obj = {}
    obj[type === 'watch' ? 'server' : type] =  {
      script: 'nps build.'+type+'.server',
      color: 'blue.bold',
    }
    return obj
  })()

  const options = {
    default: concurrent({
      ...client,
      ...server,
    }),
  }

  return options
}

const assetsPath = type => {
  const path = type === 'server'
    ? _paths.src.app.assets
    : _paths.src.server.assets

  return mkNewDirectory(path)
  ? 'mkdir -p '+path
  : 'echo "'+type+'/assets directory exists"'
}

const build = {
  description: 'Remove the previous build and run the compiler',
  default: 'nps build.development',
  development: {
    default: series.nps('commit.pre','build.development.multi'),
    client: 'npx webpack --config '+_paths.wp.client.dev,
    server: 'npx webpack --config '+_paths.wp.server.dev,
    multi: concurrentBuild('development'),
  },
  production: {
    default: series.nps('commit.pre', 'scrub.build', 'build.production.multi'),
    client: 'npx webpack --config '+_paths.wp.client.prod,
    server: 'npx webpack --config '+_paths.wp.server.prod,
    multi: concurrentBuild('production'),
  },
  watch: {
    default: concurrentBuild('watch'),
    client: watch(_paths.watch.client, 'nps build.development.client'),
    server: watch(_paths.watch.server, 'nps build.development.server'),
  },
  setup: {
    default: 'nps build.setup.assets',
    assets: {
      default: concurrent.nps('build.setup.assets.app', 'build.setup.assets.server'),
      app: assetsPath('app'),
      server: assetsPath('server'),
    },
  },
}

module.exports = build
