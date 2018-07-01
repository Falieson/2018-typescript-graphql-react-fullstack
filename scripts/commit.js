const { series } = require('nps-utils') // concurrent, setColors

module.exports = {
  default    : series.nps('commit.pre', 'commit.zen'),
  pre  : {
    description: 'Run some stuff before committing',
    default    : series.nps('lint', 'commit.pre.saveFixes', 'test'),
    saveFixes  : 'git add .',
  },
  zen: {
    description: 'Commitizen generates beautifully formatted commit messages',
    default    : 'git-cz', // commitizen
    retry   : {
    default:  'git-cz --retry',
    description: 'A commit hook failed, so use the same commit msg that I just put in',
    },
    noverify   : {
    default:  'git-cz --no-verify',
    description: 'Skip pre-commit hooks and start commitizen',
    },
  },
}