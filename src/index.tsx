// Client Entry Point
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './app/'
import Middlewares from './middleware/'

ReactDOM.render(
  <Middlewares>
    <App />
  </Middlewares>,
  document.getElementById('app'),
)
