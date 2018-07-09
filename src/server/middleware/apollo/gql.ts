// tslint:disable no-console
import { graphqlExpress } from 'apollo-server-express'
import * as bodyParser from 'body-parser'

import { GRAPHQL_REST } from '../../config.apollo'
import { schema } from '../../gql'

const graphqlHandler = graphqlExpress((req: any): any => { // tslint:disable-line no-any

  // Cookies that have not been signed
  // Object.values(req.cookies).length &&
  //   console.log('Cookies: ', req.cookies)
  // Object.values(req.signedCookies).length &&
  //   console.log('Signed Cookies: ', req.signedCookies)
  // SessionID
  // Object.values(req.sessionID).length &&
  //   console.log('SessionID: ', req.sessionID)

  const query = req.query.query || req.body.query
  if (query && query.length > 2000) {
    // None of our app's queries are this long
    // Probably indicates someone trying to send an overly expensive query
    throw new Error('Query too large.')
  }
  return {
    context: {
      req
    },
    debug      : true,
    formatError: (error: any) => ({ // tslint:disable-line no-any
      locations: error.locations,
      message  : error.message,
      path     : error.path,
      state    : error.originalError && error.originalError.state,
    }),
    pretty     : process.env.NODE_ENV !== 'production',
    rootValue: {
      me: req.user
    },
    schema,
  }
})

const apolloMiddleware: any = [ // tslint:disable-line no-any
  GRAPHQL_REST,
  bodyParser.json(),
  graphqlHandler
]

export default apolloMiddleware
