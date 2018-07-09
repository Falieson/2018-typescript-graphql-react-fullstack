const { series, rimraf, } = require('nps-utils') // concurrent, setColors


module.exports = {
  lock: {
    default: series.nps(
      'npm.lock.enable',
      'npm.lock.generate',
      'npm.lock.disable',
    ),
    disable: 'node ./scripts/npm.unlock',
    enable: 'node ./scripts/npm.lock',
    generate: 'sleep 1 && npm i --package-lock-only',
    clean: {
      default: 'sleep 1 && nps npm.lock.clean.clean',
      clean: rimraf('./package-lock.json'),
    }
  },
  audit: {
    default: series.nps(
      'npm.lock',
      'npm.audit.check',            // # CHECK
      'npm.lock.clean',
    ),
    check: 'npm audit',
    fix: {
      default: series.nps(
        'npm.lock',
        'npm.audit.fix.fix',        // # FIX
        'npm.lock.clean',
      ),
      fix: 'npm audit fix'
    }
  },
  scrub: {
    default: series.nps('scrub.npm.cache', 'scrub.npm.folders'), // 'scrub.npm.reinstall'
    cache: 'npm cache clean --force',
    folders: rimraf('node_modules'),
    // reinstall: 'npm install -D', // doesn't work b/c nps-utils is removed
  },
}
