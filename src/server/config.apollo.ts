import { webaddress } from '../helpers/string'

export const {
  HOST_NAME,
  APP_PORT,
  GRAPHQL_EXPLORE = '/graphql',
  GRAPHQL_REST = '/graphiql',
  GRAPHQL_WS = '/subscriptions',
} = process.env

export const GRAPHQL_URL_REST = webaddress({
  // endpoint
  host: HOST_NAME,
  path: GRAPHQL_REST,
  port: APP_PORT,
})
export const GRAPHQL_URL_GRAPHIQL = webaddress({
  // explorer
  host: HOST_NAME,
  path: GRAPHQL_EXPLORE,
  port: APP_PORT,
})
export const GRAPHQL_URL_WS = webaddress({
  // endpoint
  host: HOST_NAME,
  path: GRAPHQL_WS,
  port: APP_PORT,
  protocol: 'ws',
})
