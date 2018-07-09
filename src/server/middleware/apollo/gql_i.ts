import { graphiqlExpress } from 'apollo-server-express'

import {
  GRAPHQL_EXPLORE,
  GRAPHQL_REST,
  GRAPHQL_URL_WS,
} from '../../config.apollo'

const graphiqlHandler = graphiqlExpress({
  endpointURL: GRAPHQL_REST,
  subscriptionsEndpoint: `${GRAPHQL_URL_WS}`,
})

const apolloMiddleware: any = [ // tslint:disable-line no-any
  GRAPHQL_EXPLORE,
  graphiqlHandler
]

export default apolloMiddleware
