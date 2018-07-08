const fs = require('fs')

const mkNewDirectory = (target) => fs.existsSync(target) == false

const watch = (paths, func) => 'chokidar '+paths
  +' -c \"'+func
  +'\" --initial --verbose'

module.exports = {
  mkNewDirectory,
  watch,
}