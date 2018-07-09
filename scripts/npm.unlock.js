const replace = require("replace");
const { rootPath } = require('./_paths')
const pkgLock = rootPath+'/.npmrc'

replace({
    regex: "package-lock=true",
    replacement: "package-lock=false",
    paths: [pkgLock],
    recursive: false,
    silent: false,
});