// # Server Entry Points
import Express from './express'
import mongodb from './mongodb'

(async () => {
  await mongodb.init()
  Express.init()
})()
