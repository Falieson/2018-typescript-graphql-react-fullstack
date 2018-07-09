import { GraphQLSchema } from 'graphql'
import gql from 'graphql-tag'

const schema: GraphQLSchema = gql`
type Query {
  hello: String
  mockedString: String
}
`

export default schema
