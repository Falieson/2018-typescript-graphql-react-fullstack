import * as path from 'path'

import * as _config from '../config'
import { webaddress } from '../helpers/string'

// # ENV
export const paths = {
  client: path.join(process.cwd(), 'build', 'client', 'index.html'),
}

// # EXPRESS
export const {
  APP_NAME,
  APP_PORT,
  HOST_NAME,
} = _config

export const REACT_URL_WWW = webaddress({
  host: HOST_NAME,
  path: '',
  port: APP_PORT,
})

// # MONGO
export const {
  MONGODB_NAME = APP_NAME,
  MONGODB_PROTOCOL = 'mongodb',
  MONGODB_USER = '',
  MONGODB_PASS = '',
  MONGODB_HOST = HOST_NAME || 'localhost',
  MONGODB_PORT = 2700,
} = process.env

export const MONGODB_URL = MONGODB_USER && MONGODB_PASS
  ? `${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`
  : `${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`

export const MONGODB_URL_FULL = webaddress({
  host    : MONGODB_USER && MONGODB_PASS
    ? `${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}` : MONGODB_HOST,
  path    : MONGODB_NAME,
  port    : MONGODB_PORT,
  protocol: MONGODB_PROTOCOL,
})
