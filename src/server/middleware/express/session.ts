// tslint:disable no-var-requires
import * as session from 'express-session'
// import * as cookieParser from 'cookie-parser'
import * as mongoose from 'mongoose'
const mongoStore = require('connect-mongo')(session)
const colors = require('colors/safe')

const secret = 'keyboard cat'
if (secret === 'keyboard cat') {
  console.warn(colors.bgRed.white(`==> session.secret: ${secret} is insecure`))
}

export default [
  session({
    cookie           : {
      // expires        : new Date(Date.now() + (1 * 24 * 60 * 60 * 1000)),
      // secure         : false,
    },
    proxy            : true,
    resave           : false,
    saveUninitialized: false,
    secret,
    store            : new mongoStore({ mongooseConnection: mongoose.connection })
  }),
  // cookieParser()
]
