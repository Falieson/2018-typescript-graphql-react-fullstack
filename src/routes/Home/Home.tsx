import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import Hello from '../../components/hello'
import NetworkStatus from '../../components/network'
import './Home.css'

function HomeEntrancePage() {
  return (
    <div className="body--container">
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <div>
          <h2>
            <Hello />
          </h2>
          <NetworkStatus />
        </div>
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
