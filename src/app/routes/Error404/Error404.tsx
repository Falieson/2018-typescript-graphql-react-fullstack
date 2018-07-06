import * as React from 'react'

class Error404 extends React.Component<{
  staticContext: {missed: boolean}
}, {}> {
  componentWillMount() {
    const { staticContext } = this.props
    if (staticContext) staticContext.missed = true
  }

  render() {
    return <div>Sorry, that page was not found.</div>
  }
}

export default Error404
