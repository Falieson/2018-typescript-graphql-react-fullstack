import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools' // addMockFunctionsToSchema,

import {
  resolvers
} from './'

export const typeDefs = `
type Authorization {
  isAuthed: Boolean
  password: String!
  username: String
}
type NetworkStatus {
  isConnected: Boolean
}
type User {
  _id: String
  username: String
}

type Mutation {
  userCreate(username: String!, password: String!): User

  authLogin(username: String!, password: String!): Authorization
  updateNetworkStatus(isConnected: Boolean): NetworkStatus
}
type Query {
  hello: String
  mockedString: String
}
`

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers})

export default schema
