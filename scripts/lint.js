const filePaths = [
  "src/**/*.ts",
  "src/**/*.tsx",
  "src/**/**/*.ts",
  "src/**/**/*.tsx",
  "src/**/**/**/*.ts",
  "src/**/**/**/*.tsx",
  "src/**/**/**/**/*.ts",
  "src/**/**/**/**/*.tsx",
  "scripts/lint.js",         // this file
  "tslint.json",
  "tsconfig.json",
  "package.json",
].join(' ')

module.exports = {
  default: 'tslint -c tslint.json -p tsconfig.json',
  fix: {
    default: 'git add . && tslint --fix -c tslint.json -p tsconfig.json \'./src/**/*.{ts,tsx}\'',
    watch: 'chokidar '+filePaths+' -c \"nps lint.fix\" --initial --verbose',
  },
  watch: {
    default: 'chokidar '+filePaths+' -c \"nps lint\" --initial --verbose',
  },
  type: 'tsc -p tsconfig.json --noEmit',
}