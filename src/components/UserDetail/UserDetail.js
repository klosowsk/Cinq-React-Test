import React from 'react';
import { Link } from "react-router-dom";

import './UserDetails.css'

const UserDetails = (props) => {
    return (
        <section className="users-details">
            <div className="user-card" key={props.user.id}>
                <h1>{props.user.firstName} {props.user.lastName}</h1>
                <p>Age: {props.user.age}</p>
                <p>Description: {props.user.description}</p>
                <p>
                    <button>Voltar</button> 
                    &nbsp;|&nbsp;
                    <button>Editar</button>
                </p>
            </div>
        </section>
    )
}

export default UserDetails;