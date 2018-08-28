import React, { Component } from 'react'

import { GotenPermissionsValidator } from '../../src'

import './exampleGotenPermissions.css'


export default class ExampleGotenPermissions extends Component {

    render() {
        return (
            <div className= 'exampleGotenPermissions'>
                <div className = 'title'>
                    To use GotenPermissions you will to englobe the application inside 
                    a GotenPermissionsProvider, then you can use GotenPermissionsValidator 
                    for show all components with permissions.
                </div>
                <GotenPermissionsValidator
                    permission='add'
                >
                <div className = 'add'>
                    ADD COMPONENT
                </div>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission = 'edit'
                >
                    <label className='edit'>EDIT COMPONENT 1</label>
                    <br/>
                    <label className='edit'>EDIT COMPONENT 2</label>
                    <br/>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission='delete'
                >
                    <div className='delete'>
                        DELETE COMPONENT
                    </div>
                </GotenPermissionsValidator>
            </div>
        )
    }
}
