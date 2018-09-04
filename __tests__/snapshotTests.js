import React from 'react'
import renderer from 'react-test-renderer'

import { GotenPermissionsProvider, 
        GotenPermissionsValidator } from '../src'


describe('GotenPermissions snapshots', () => {

    it('with permissions', () => {
        let permission = 'permission'
        const tree = renderer.create(
            <GotenPermissionsProvider
                permissions={[permission]}
            >
                <GotenPermissionsValidator
                    permission={permission}
                >
                    <div>
                        COMPONENT
                    </div>
                </GotenPermissionsValidator>
            </GotenPermissionsProvider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with permissions and multiples components', () => {
        let permission = 'permission'
        const tree = renderer.create(
            <GotenPermissionsProvider
                permissions={[permission]}
            >
                <GotenPermissionsValidator
                    permission={permission}
                >
                    <div>
                        COMPONENT 1
                    </div>
                    <div>
                        COMPONENT 2
                    </div>
                </GotenPermissionsValidator>
            </GotenPermissionsProvider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('withOut permissions', () => {
        let permission = 'permission'
        let notPermission = 'not_permission'
        const tree = renderer.create(
            <GotenPermissionsProvider
                permissions={[permission]}
            >
                <GotenPermissionsValidator
                    permission={notPermission}
                >
                    <div>
                        COMPONENT
                    </div>
                </GotenPermissionsValidator>
            </GotenPermissionsProvider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with multiples permissions', () => {
        let permissions = ['perm1', 'perm2']
        const tree = renderer.create(
            <GotenPermissionsProvider
                permissions={permissions}
            >
                <GotenPermissionsValidator
                    permission={permissions[0]}
                >
                    <div>
                        COMPONENT 1
                    </div>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission={permissions[1]}
                >
                    <div>
                        COMPONENT 2
                    </div>
                </GotenPermissionsValidator>
            </GotenPermissionsProvider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('with multiples permissions but one component rejected', () => {
        let permissions = ['perm1', 'perm2']
        let notPermission = 'not_permission'
        const tree = renderer.create(
            <GotenPermissionsProvider
                permissions={permissions}
            >
                <GotenPermissionsValidator
                    permission={permissions[0]}
                >
                    <div>
                        COMPONENT 1
                    </div>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission={notPermission}
                >
                    <div>
                        COMPONENT 2
                    </div>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission={permissions[1]}
                >
                    <div>
                        COMPONENT 3
                    </div>
                </GotenPermissionsValidator>
            </GotenPermissionsProvider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('without GotenPermissionsValidator', () => {
        let permissions = ['perm1', 'perm2']
        const tree = renderer.create(
            <GotenPermissionsProvider
                permissions={permissions}
            >
                <label>Component 1</label>
                <br/>
                <label>Component 2</label>
            </GotenPermissionsProvider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('not only GotenPermissionsValidator', () => {
        let permissions = ['perm1', 'perm2']
        let notPermission = 'not_permission'
        const tree = renderer.create(
            <GotenPermissionsProvider
                permissions={permissions}
            >
                <GotenPermissionsValidator
                    permission={permissions[0]}
                >
                    <div>
                        COMPONENT 1
                    </div>
                </GotenPermissionsValidator>
                <label>Component without GotenPermissionsProvider 1</label>
                <GotenPermissionsValidator
                    permission={notPermission}
                >
                    <div>
                        COMPONENT 2
                    </div>
                </GotenPermissionsValidator>
                <GotenPermissionsValidator
                    permission={permissions[1]}
                >
                    <div>
                        COMPONENT 3
                    </div>
                </GotenPermissionsValidator>
                <label>Component without GotenPermissionsProvider 2</label>
            </GotenPermissionsProvider>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})