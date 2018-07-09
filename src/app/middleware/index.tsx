import * as React from 'react'
import Apollo from './apollo'
import Router from './router'

import { GRAPHQL_URL_REST } from '../config.apollo'

function Middlwares({children}: {children: React.ReactChild}) {
  return (
    <Apollo
      graphqlURL={GRAPHQL_URL_REST}
    >
      <Router>
        {children}
      </Router>
    </Apollo>
  )
}

export default Middlwares
