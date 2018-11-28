import React from 'react';
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import { findUsers } from '../../utils'
import './UsersCards.scss'

const UsersCards = (props) => {
    return (
        <section className="users-cards">
            { 
                findUsers(props.users, props.users.search).map( user => {
                    return <div className="user-card" key={user.id}>
                            <h1>{user.firstName} {user.lastName}</h1>
                            <p>Age: {user.age}</p>
                            <p>Description: {user.description}</p>
                            <p>
                                <input 
                                    type="checkbox" 
                                    onChange={()=>{ user.selected ? props.unselectUser(user.id) : props.selectUser(user.id)}}
                                    checked={user.selected}/> 
                                &nbsp;|&nbsp;
                                <Link to={"user/"+user.id}><button>Show</button></Link> 
                                &nbsp;|&nbsp;
                                <button onClick={() => props.deleteUser(user.id)}>Delete</button></p>
                        </div>
                })
            }
        </section>
    )
}

UsersCards.propTypes = {
    users: propTypes.object.isRequired,
    unselectUser: propTypes.func.isRequired,
    selectUser: propTypes.func.isRequired,
    deleteUser: propTypes.func.isRequired
}

export default UsersCards;