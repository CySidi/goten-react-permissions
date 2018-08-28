import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { GotenPermissionsProvider } from '../../src'
import ExampleGotenPermissions from './exampleGotenPermissions'


const permissions = ['edit', 'delete', 'add']

class App extends Component {
  render() {
    return (
      <GotenPermissionsProvider
        permissions={permissions}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GotenPermissions Examples</h1>
        </header>
        <div className="App-body">
          <ExampleGotenPermissions/>
        </div>
      </GotenPermissionsProvider>
    )
  }
}

export default App
