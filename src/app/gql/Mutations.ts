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
}

// https://www.apollographql.com/docs/react/advanced/caching.html#reset-store
// resetOnLogout: async () => client.resetStore(),
