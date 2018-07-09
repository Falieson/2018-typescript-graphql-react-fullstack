const replace = require("replace");
const { rootPath } = require('./_paths')
const pkgLock = rootPath+'/.npmrc'

replace({
    regex: "package-lock=false",
    replacement: "package-lock=true",
    paths: [pkgLock],
    recursive: false,
    silent: false,
});