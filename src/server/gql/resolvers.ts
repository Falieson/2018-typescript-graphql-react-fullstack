// tslint:disable no-console
import { ifClientCache } from './_helpers'

export const defaultValues = {
  authorization: {
    __typename: 'Authorization',
    isAuthed: false,
  },
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: false,
  },
}

export default {
  Mutation: {
    authLogin: (_, { username, password }, { cache }) => {
      const isAuthed = username.length > 0  && password.length > 0
      const authorization = {
        __typename: 'Authorization',
        isAuthed,
        password,
        username,
      }
      ifClientCache(cache, authorization)
      return authorization
    },
    updateNetworkStatus: (_, { isConnected }, { cache }) => {
      const networkStatus = {
        __typename: 'NetworkStatus',
        isConnected
      }
      ifClientCache(cache, networkStatus)
      return networkStatus
    },
  },
}

// https://www.apollographql.com/docs/react/advanced/caching.html#reset-store
// resetOnLogout: async () => client.resetStore(),
