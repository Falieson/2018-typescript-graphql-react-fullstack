import * as React from 'react'

import './Header.scss'

interface IProps {
  items: React.ReactChild[],
}

class Header extends React.Component<IProps, {}> {
  renderItems() {
    return this.props.items.map((item, i) => <li key={i}>
      {item}
    </li>)
  }

  render() {
    return <nav>
      <div className="list--horizontal">
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    </nav>
  }
}

export default Header
