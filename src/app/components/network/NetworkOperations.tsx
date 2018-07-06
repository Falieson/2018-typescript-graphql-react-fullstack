import { graphql } from 'react-apollo'
import { getStatus } from './NetworkQueries.gql'

// tslint:disable-next-line no-any
export const connectIsConnected = (Component: any) => graphql(getStatus, {
  props: ({ data: { networkStatus, loading, error } }) => {
    if (loading) {
      return { loading }
    }

    if (error) {
      return { error }
    }

    return {
      isConnected: networkStatus.isConnected,
    }
  },
})(Component)
