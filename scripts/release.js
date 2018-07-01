module.exports = {
  test: 'standard-version --dry-run',
  noverify: 'standard-version --no-verify',
  init: 'standard-version --first-release',     // 1.0.0
  default: 'standard-version',                  // 1.0.1
  pre: 'standard-version --prerelease',         // 1.0.1-0
  alpha: 'standard-version --prerelease alpha', // 1.0.1-alpha.0
  beta: 'standard-version --prerelease beta',   // 1.0.1-beta.0
  patch: 'standard-version --release-as patch', // 1.0.2
  minor: 'standard-version --release-as minor', // 1.1.0
  major: 'standard-version --release-as major', // 2.0.0
}