import { execute, subscribe } from 'graphql'
import { PubSub } from 'graphql-subscriptions'
import { Server } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'

import { schema } from '../../../gql'
import { GRAPHQL_WS } from '../../config.apollo'

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
