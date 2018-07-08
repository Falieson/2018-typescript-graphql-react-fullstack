import * as Express from 'express'
import * as fs from 'fs'
import * as path from 'path'
const colors = require('colors/safe') // tslint:disable-line no-var-requires

import paths from '../../../paths'

const router = Express.Router()

if (fs.existsSync(paths.client)) {
  // tslint:disable-next-line no-console
  console.log(colors.bgGreen.white(`==> Loading "index.html" from: ${path.relative('.', paths.client)}`))

  router.get('*', ({}, res: Express.Response) => {
    res.sendFile(paths.client)
  })
} else {
  const message = `No react entry "index.html" at: ${paths.client}`
  throw new Error(message)
}

export default router
