import { ApolloQueryResult } from 'apollo-client'
import * as React from 'react'
import { compose, graphql } from 'react-apollo' //  compose
import { getStatus, updateStatus } from './NetworkQueries.gql'

interface IProps {
  isConnected: boolean,
  isLoading: boolean,
  updateNetworkStatus: (isConnected: any) => Promise<ApolloQueryResult<{}>>, // tslint:disable-line no-any
}
interface IState {}
class NetworkStatus extends React.Component<IProps, IState> {
  toggleConnected = () => this.props.updateNetworkStatus(!!!this.props.isConnected)
  render() {
    const {isConnected, isLoading} = this.props

    if (isLoading) {
      return <div><h2>Loading ... </h2></div>
    }

    return <div>
      <button onClick={() => this.toggleConnected()}>{isConnected ? 'Disconnect' : 'Connect'}</button>
      Connected to GQL Endpoint? {isConnected ? 'YES' : 'NOPE!!'}
    </div>
  }
}

export default compose(
  graphql(updateStatus, {
    props: ({ mutate }) => ({
      updateNetworkStatus: isConnected => mutate({ variables: { isConnected } }),
    }),
  }),
  graphql(getStatus, {
    props: ({ data: { networkStatus, loading, error } }) => {
      if (loading) {
        return { loading }
      }

      if (error) {
        return { error }
      }

      return {
        isConnected: networkStatus.isConnected,
        isLoading: loading,
      }
    },
  }),
)(NetworkStatus)
