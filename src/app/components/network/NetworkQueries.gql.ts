import gql from 'graphql-tag'

export const getStatus = gql`
query {
  networkStatus @client {
    isConnected
  }
}
`

export const updateStatus = gql`
mutation ($isConnected: Boolean) {
  updateNetworkStatus(isConnected: $isConnected) @client
}
`
