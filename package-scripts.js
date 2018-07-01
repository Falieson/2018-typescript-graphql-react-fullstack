/** Available scripts (camel or kebab case accepted)
  *  like `nps` or a series like `nps build start.build`
  *  for more info `nps help build`
  *
  * build - nps commit.pre && nps build.ts
  * build.ts - nps scrub.build && nps build.ts.tsc
  * build.ts.tsc - tsc
  * commit - nps commit.pre && nps commit.zen
  * commit.pre - nps commit.pre.saveFixes
  * commit.pre.saveFixes - git add .
  * commit.zen - git-cz
  * commit.zen.retry - git-cz --retry
  * commit.zen.noverify - git-cz --no-verify
  * default - ts-node src/index.ts
  * help - this list of commands
  * git.tags.push - git push --follow-tags origin master
  * git.tags.deleteAllLocally - git tag -d `git tag | grep -E '.'`
  * publish - nps publish.npm && nps publish.git
  * publish.npm - npm publish --tag next
  * publish.git - git push --follow-tags origin master
  * release - standard-version
  * release.test - standard-version --dry-run
  * release.noverify - standard-version --no-verify
  * release.init - standard-version --first-release
  * release.pre - standard-version --prerelease
  * release.alpha - standard-version --prerelease alpha
  * release.beta - standard-version --prerelease beta
  * release.patch - standard-version --release-as patch
  * release.minor - standard-version --release-as minor
  * release.major - standard-version --release-as major
  * scrub.build - node node_modules/rimraf/bin.js build/
  * start - ts-node src/index.ts
  * start.build - node build/index.js
  * test - echo "Error: no test specified" && exit 1
  * p - nps build start.build
**/

const scripts = require('./scripts/')

module.exports = {
  scripts,
}
