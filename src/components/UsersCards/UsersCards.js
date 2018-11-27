import React from 'react';

import './UsersCards.scss'

const UsersCards = (props) => {
    return (
        <section className="users-cards">
            { 
                props.users.items.map( user => {
                    return <div className="user-card" key={user.id}>
                                <h1>{user.firstName} {user.lastName}</h1>
                                <p>Age: {user.age}</p>
                                <p>Description: {user.description}</p>
                                <p><input type="checkbox"/> | <button>Show</button> | <button>Delete</button></p>
                            </div>
                })
            }
        </section>
    )
}

export default UsersCards;