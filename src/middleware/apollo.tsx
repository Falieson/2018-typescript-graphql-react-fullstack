import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import { ResolverDefaults,  Resolvers, } from '../gql/'

interface IProps {
  graphqlURL: string,
  children: React.ReactChild
}

export default class ApolloClientProvider extends React.Component<IProps> {
  private _apolloClient: ApolloClient<any> // tslint:disable-line:no-any

  private _cache = new InMemoryCache()

  private _stateLink = withClientState({
    cache: this._cache,
    defaults: ResolverDefaults,
    resolvers: Resolvers,
  })

  private _httpLink = new HttpLink({
    uri: this.props.graphqlURL,
  })

  // Create error handler link
  // https://github.com/apollographql/apollo-client/blob/master/docs/source/features/error-handling.md
  private _errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.error(`[GraphQL] Message: ${message}, Location: ${locations}, Path: ${path}`)
      })
    }

    if (networkError) {
      console.error(`[Network] ${networkError}`)
    }
  })

  constructor(props: IProps) {
    super(props)

    const links = [
      this._stateLink,
      this._errorLink,
      this._httpLink
    ]

    this._apolloClient = new ApolloClient({
      cache: this._cache,
      connectToDevTools: true,
      link: ApolloLink.from(links),
    })
  }

  public render() {
    return <ApolloProvider client={this._apolloClient}>
      {this.props.children}
    </ApolloProvider>
  }
}
