import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export default function({children}: {children: React.ReactChild}) {
  return (
    <Router>
      {children}
    </Router>
  )
}
