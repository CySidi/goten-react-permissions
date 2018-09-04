# Goten Permissions

Package to render components if them have permissions.

## Index

- [**Install**](#install)
- [**Usage**](#usage)
- [**Example of use**](#example-of-use)
- [**Props**](#props)
- [**Contributions**](#contributions)

## Install

```npm install -s goten-react-permissions```

## Usage

``` jsx
var GotenList = require('goten-react-permissions').GotenForm; // ES5
 
import { GotenList } from 'goten-react-permissions'; // ES6

    ...

    <GotenPermissionsProvider
        permissions={permissions}
    >
        <GotenPermissionsValidator
            permission='permission'
        >
            ...
            <Component/>
        </GotenPermissionsValidator>
        ...
    </GotenPermissionsProvider>
```

## Example of use

``` jsx
import React, { Component } from 'react'

import { GotenPermissionsProvider,
        GotenPermissionsValidator } from 'goten-react-permissions'

import './exampleGotenPermissions.css'


const permissions = ['add', 'edit', 'delete'] //You can obtain this from redux.

export default class App extends Component {

    render() {
        return (
            <GotenPermissionsProvider
                permissions = {permissions}
            >
                <div>Normal Component</div>
                <GotenPermissionsValidator
                    permission='add'
                >
                <div>ADD COMPONENT</div>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission = 'edit'
                >
                    <label>EDIT COMPONENT 1</label>
                    <br/>
                    <label>EDIT COMPONENT 2</label>
                    <br/>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission='delete'
                >
                    <div>DELETE COMPONENT</div>
                </GotenPermissionsValidator>
            </GotenPermissionsProvider>
        )
    }
}
```

## Props

### GotenPermissionsProvider

| Prop Name   | Type  | Default | Required | Description                                  |
|-------------|-------|---------|----------|----------------------------------------------|
| permissions | array |         | true     | Array to permissions for show the components. |

### GotenPermissionsValidator

| Prop Name  | Type   | Default | Required | Description          |
|------------|--------|---------|----------|----------------------|
| permission | string |         | true     | Permission to show the component. |

## Contributions

To contribute to this package, we propose the following workflow:
1. Add an issue with related tags to describe the contribution (is it a bug?, a feature request?).
2. Branch your solution from develop, with the name as ```#<issue_number>_<descriptive_name>```.
3. Send a pull request and wait for approval/corrections.
