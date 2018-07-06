import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

// import About from './About'
import NetworkStatus from '../components/network'
import Entrance from './Entrance'
import Error404 from './Error404'

class LoggedOutRoutes extends React.Component<{}, {}> {
  render() {
    return <Switch>
      <Route exact path="/" component={Entrance} />
      <Route path="/about" component={() => <div><h1>About Page</h1><NetworkStatus /></div>} />
      <Route component={Error404} />
    </Switch>
  }
}
export default LoggedOutRoutes
