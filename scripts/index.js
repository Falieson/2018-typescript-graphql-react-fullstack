const { series, rimraf, } = require('nps-utils') // concurrent, setColors

const build = require('./build.js')
const commit = require('./commit.js')
const lint = require('./lint.js')
const release = require('./release.js')
const start = require('./start.js')
const scrub = require('./scrub.js')
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

const shortcuts = {
  p: {
    default: 'nps build start.build',
    description: 'Build the code and run the build.',
  },
  c: {
    default: 'nps commit',
    description: 'Start a commit!',
  },
  cn: {
    default: 'nps commit.zen.noverify',
    description: 'Skip all pre-commit ops.',
  },
  cr: {
    default: 'nps commit.zen.retry',
    description: 'Retry last commit.',
  },
  l: {
    default: 'nps lint',
    description: 'Run linter.',
  },
  lf: {
    default: 'nps lint.fix',
    description: 'Fix lint errors.',
  },
  // FIXME: w/ a prompt. We don't want to run this accidentally!
  //   https://stackoverflow.com/q/50770212/604950
  // r: {
  //   default: 'nps build release publish',
  //   description: 'Build the code, bump the version, and update git/npm.',
  // },
}

const scripts =  {
    build,
    commit,
    default: start.default,
    git,
    lint,
    publish,
    release,
    scrub,
    start,
    test,
}

module.exports = Object.assign({}, shortcuts, scripts,) // appends scripts to shortcuts so they are grepp'd first
