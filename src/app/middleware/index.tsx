import * as React from 'react'
import Apollo from './apollo'
import Router from './router'

const GQL_ENDPOINT = '' // "https://w5xlvm3vzz.lp.gql.zone/graphql"

function Middlwares({children}: {children: React.ReactChild}) {
  return (
    <Apollo
      graphqlURL={GQL_ENDPOINT}
    >
      <Router>
        {children}
      </Router>
    </Apollo>
  )
}

export default Middlwares
