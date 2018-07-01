/* eslint-disable import/no-extraneous-dependencies */

import { shallow } from 'enzyme'
import * as React from 'react'
import Error404 from '../Error404'

describe('<Error404 />', () => {
  test('renders', () => {
    const staticContext: any = {} // tslint:disable-line no-any
    const wrapper = shallow(<Error404 staticContext={staticContext} />)
    expect(wrapper).toMatchSnapshot()
    expect(staticContext.missed).toBeTruthy()
  })
})
