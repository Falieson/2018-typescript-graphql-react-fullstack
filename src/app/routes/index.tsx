import * as React from 'react'

import LoggedIn from './Routes.LoggedIn'
import LoggedOut from './Routes.LoggedOut'

import { connectIsAuthed } from '../components/auth/AuthOperations'

interface IProps {
  isAuthed: boolean
}

class AuthedRoutes extends React.Component<IProps, {}> {
  render() {
    if (this.props.isAuthed === true) {
      return <LoggedIn />
    }

    return <LoggedOut />
  }
}

export default connectIsAuthed(AuthedRoutes)
