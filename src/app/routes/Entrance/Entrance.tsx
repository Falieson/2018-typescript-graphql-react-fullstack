import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import { LoginForm, RegisterForm } from '../../components/auth/'
import './Entrance.css'

function EntrancePage() {
  return (
    <div className="body--container">
      <Helmet>
        <title>Entrancepage</title>
      </Helmet>

      <Gx col={6}>
        <LoginForm />
      </Gx>
      <Gx col={6}>
        <RegisterForm />
      </Gx>
    </div>
  )
}

export default EntrancePage
