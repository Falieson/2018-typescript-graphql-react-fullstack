// tslint:disable no-console
import * as fs from 'fs'
import * as mongoose from 'mongoose'

import { MONGODB_URL_FULL } from './config'
import runFixtures from './data/_fixtures'
import { staticFilePath } from './data/_helpers'

class MongodbModel {
  async init() {
    try {
      mongoose.connect(MONGODB_URL_FULL)
      const mongodb = mongoose.connection
      mongodb.on('error', console.error.bind(console, 'connection error:'))
      mongodb.once('open', async () => {
        this.checkStatics()
        runFixtures()
      })
    } catch (err) {
      console.error(err, 'openMongo: ')  // tslint:disable-line no-console
    }
  }

  checkStatics() {
    const staticsLoaded = fs.existsSync(staticFilePath('')) === true
    if (!staticsLoaded) {
      console.log('ENV: ', process.env.NODE_ENV)
      console.log('CWD: ', process.cwd())
      console.log('Statics: ', staticFilePath(''))
      if (process.env.NODE_ENV === 'production') {
        throw new Error(`No directory "static" in CWD: ${process.cwd()}/server`)
      } else {
        throw new Error('Missing "build/server/static/" . Webpack probably isn\'t finished.')
      }
    }
  }
}

export default new MongodbModel()
