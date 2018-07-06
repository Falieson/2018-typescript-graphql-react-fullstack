// import './fonts'
import * as React from 'react'

import Middlewares from '../middleware/'
// import Helmet from './Helmet'
import App from './App'
import './global.css'

export default function() {
  return <Middlewares>
      <App />
  </Middlewares>
}
