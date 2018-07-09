import { webaddress } from '../helpers/string'
import resolvers, {defaultValues as resolverDefaults } from '../server/gql/resolvers'

export {
  resolvers,
  resolverDefaults
}

export const HOST_NAME = 'localhost'
export const APP_PORT = 3000
export const GRAPHQL_REST = '/graphiql'

// FIXME: process is not defined
// const {
  // HOST_NAME,
  // APP_PORT,
  // GRAPHQL_REST = '/graphiql',
// } = process.env

export const GRAPHQL_URL_REST = webaddress({
  // endpoint
  host: HOST_NAME,
  path: GRAPHQL_REST,
  port: APP_PORT,
})
