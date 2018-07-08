const { series, rimraf, } = require('nps-utils') // concurrent, setColors

const build = require('./build.js')
const commit = require('./commit.js')
const lint = require('./lint.js')
const mongo = require('./mongo.js')
const postinstall = require('./postinstall.js')
const release = require('./release.js')
const shortcuts = require('./shortcuts')
const scrub = require('./scrub.js')
const server = require('./server.js')
const start = require('./start.js')
const test = require('./test.js')

const git = {
  tags: {
    push: 'git push --follow-tags origin master',
    deleteAllLocally: "git tag -d `git tag | grep -E '.'`",
  }
}

const publish = {
  default: series.nps('publish.npm', 'publish.git'),
  npm: 'npm publish --tag next',
  git: git.tags.push,
}

const scripts =  {
  build,
  commit,
  default: start.default,
  git,
  lint,
  mongo,
  publish,
  postinstall,
  release,
  scrub,
  server,
  start,
  test,
}

// appends scripts to shortcuts so they are grepp'd first
module.exports = Object.assign({},
  shortcuts,
  scripts,
)
