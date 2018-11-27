import React from 'react';

import './UsersList.scss'

const UsersList = (props) => {
    console.log(props)
    return (
        <section className="users-list">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    props.users.items.map( user => {
                        return <tr key={user.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>Show | Delete</td>
                                </tr>
                    })
                }
                </tbody>
            </table>
        </section>
    )
}

export default UsersList;