// tslint:disable no-console

// import * as Agendash from 'agendash'
import * as express from 'express'
import { createServer } from 'http'
import * as path from 'path'
const colors = require('colors/safe') // tslint:disable-line no-var-requires

import {
  APP_PORT,
  MONGODB_URL_FULL,
  REACT_URL_WWW,
} from './config'
import { Express as ExpressMW } from './middleware/'

// NOTE: the default export runs the constructor!
export class Express {
  app: express.Express // tslint:dsiable-line no-any

  constructor() {
    this.app = express()
    this.build()
  }

  build() {
    const {app} = this

    // Don't expose any software information to potential hackers.
    app.disable('x-powered-by')

    // Morgan Logger
    app.use(...ExpressMW.morgan)

    // React
    // const reactClient = process.env.NODE_ENV === 'production'
    //   ? path.join(process.cwd(), 'client')
    //   : path.join(process.cwd(), 'build', 'client')
    const reactClient = path.join(process.cwd(), 'build', 'client')
    console.log(colors.bgGreen.white(`==> Loading React App from: ${path.relative('.', reactClient)}`))
    app.use(express.static(reactClient))
    app.use('/', ExpressMW.router)
  }

  init() {
    // http://localhost:3000/
    // http://localhost:3000/graphiql
    // http://localhost:3000/graphql
    // ws://localhost:3000/subscriptions

    const {app} = this

    const SE = (t = '') => t.toUpperCase().substr(0, 4)
    const onlineTitle = `${SE(process.env.NODE_PLATFORM)} Online (${SE(process.env.NODE_ENV)})`

    // Create a http/ws listener for our express app.
    const ws = createServer(app)
    const listener = ws.listen(APP_PORT, () => {

      // tslint:disable-next-line no-console
      console.log(colors.bgBlack.white(`\n\n\n\n\n\n\n\n\n
      🌐    ${onlineTitle}    🌐

      🔎    www         ${REACT_URL_WWW}
      📊    mongo       ${MONGODB_URL_FULL}`))
      // 📡    endpoint    ${GRAPHQL_URL_GRAPHQL}
      // 🎮    explorer    ${GRAPHQL_URL_GRAPHIQL}
      // ➿    websocket   ${GRAPHQL_URL_WS}
    })

    return listener
  }
}

export default new Express()
