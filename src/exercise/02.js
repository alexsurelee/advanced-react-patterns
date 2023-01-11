// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(props.children, child => {
    // native elements (e.g. <span>) are of type string, components are functions
    if (typeof child.type === 'string') return child

    return React.cloneElement(child, {
      on: on,
      toggle: toggle,
    })
  })
}

const ToggleOn = ({on, children}) => (on ? children : undefined)

const ToggleOff = ({on, children}) => (!on ? children : undefined)

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
