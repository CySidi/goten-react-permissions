import React, { Component } from 'react'

import PropTypes from 'prop-types'


let permissionsList = []

export class GotenPermissionsProvider extends Component {

    render() {
        permissionsList = this.props.permissions
        return (
            <div>
                { this.props.children }
            </div>
        )
    }

}

export class GotenPermissionsValidator extends Component {

    render() {
        return (
            <div>
                {permissionsList.includes(this.props.permission) ?
                    this.props.children
                : null }
            </div>
        )
    }

}