import { webaddress } from '../helpers/string'

// # EXPRESS
export const {
  APP_NAME,
  APP_PORT,
  HOST_NAME,

  // # MONGO
  MONGODB_NAME,
  MONGODB_PROTOCOL,
  MONGODB_USER,
  MONGODB_PASS,
  MONGODB_HOST,
  MONGODB_PORT,
} = process.env

export const REACT_URL_WWW = webaddress({
  host: HOST_NAME,
  path: '',
  port: APP_PORT,
})

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
