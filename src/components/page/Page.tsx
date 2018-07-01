import * as React from 'react'

import Header from '../header/'

export default function Page({children}: {children: React.ReactChild |  React.ReactChild[]}) {
  return <div id="body">
    <div id="header"><Header /></div>
    <div id="content">{children}</div>
  </div>
}
