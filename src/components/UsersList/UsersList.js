import React from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { findUsers } from '../../utils'
import './UsersList.scss'

const UsersList = (props) => {
    const [selectedAll, setSelectedAll] = useState(false);
    const toogleSelectAll = () => {
        selectedAll ? props.unselectAllUsers() : props.selectAllUsers() 
        setSelectedAll(!selectedAll)
    }
    return (
        <section className="users-list">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" 
                                checked={selectedAll} 
                                onChange={toogleSelectAll}
                                />
                        </th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    findUsers(props.users, props.users.search).map( user => {
                        return (
                            <tr key={user.id}>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={user.selected} 
                                        onChange={()=>{ user.selected ? props.unselectUser(user.id) : props.selectUser(user.id)}}
                                        />
                                </td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>
                                    <Link to={"user/"+user.id}><button>Show</button></Link> 
                                    &nbsp;|&nbsp;
                                    <button onClick={() => props.deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </section>
    )
}

UsersList.propTypes = {
    users: propTypes.object.isRequired,
    unselectUser: propTypes.func.isRequired,
    selectUser: propTypes.func.isRequired,
    deleteUser: propTypes.func.isRequired
}

export default UsersList;