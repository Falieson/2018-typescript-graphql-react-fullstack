import * as React from 'react'

import LoggedIn from './Header.LoggedIn'
import LoggedOut from './Header.LoggedOut'

import { connectIsAuthed } from '../auth/AuthOperations'

interface IProps {
  isAuthed: boolean
}

class Header extends React.Component<IProps, {}> {
  render() {
    if (this.props.isAuthed === true) {
      return <LoggedIn />
    }

    return <LoggedOut />
  }
}

export default connectIsAuthed(Header)
