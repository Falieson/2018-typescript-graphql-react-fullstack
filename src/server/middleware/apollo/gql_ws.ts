import { execute, subscribe } from 'graphql'
import { PubSub } from 'graphql-subscriptions'
import { Server } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'

import { GRAPHQL_WS } from '../../config.apollo'
import { schema } from '../../gql'

export const pubsub = new PubSub()

export default function(ws: Server) {
  return new SubscriptionServer({
    execute,
    schema,
    subscribe,
  },                            {
    path: GRAPHQL_WS,
    server: ws,
  })
}
