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
      const data = {
        authorization: {
          __typename: 'Authorization',
          isAuthed,
          password,
          username,
        },
      }
      cache.writeData({ data })
      return null
    },
    updateNetworkStatus: (_, { isConnected }, { cache }) => {
      const data = {
        networkStatus: {
          __typename: 'NetworkStatus',
          isConnected
        },
      }
      cache.writeData({ data })
      return null
    },
  },
  Query: {
    hello: () => fetch('https://fourtonfish.com/hellosalut/?mode=auto').then(res => res.json()).then(data => data.hello)
  },
}

// https://www.apollographql.com/docs/react/advanced/caching.html#reset-store
// resetOnLogout: async () => client.resetStore(),
