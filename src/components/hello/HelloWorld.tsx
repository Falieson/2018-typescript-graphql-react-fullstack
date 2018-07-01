/* TS-Module w/ Declarations (Part 1/4)
 * http://TGRstack.com/#ts-module_articles_part-1
 * ./src/HelloWorld.ts (Section 2. Figure 02.)
**/

import * as React from 'react'
import './HelloWorld.css'

function HelloWorldMaker(first: string, second: string): JSX.Element {
  return <div className="rainbow">{first} {second}</div>
}

export default HelloWorldMaker
