import * as React from 'react'
import { Link } from 'react-router-dom/'

import Header from './Header'
import './Header.scss'

class LoggedOutHeader extends React.Component<{}, {}> {
  render() {
    const items = [
      <span className="header--text">LoggedOut Header</span>, // tslint:disable-line jsx-key
      <Link to="/">Home</Link>,                               // tslint:disable-line jsx-key
      <Link to="/about">About</Link>,                         // tslint:disable-line jsx-key
      <Link to="/foo">Foo</Link>,                             // tslint:disable-line jsx-key
    ]

    return <Header items={items} />
  }
}

export default LoggedOutHeader
