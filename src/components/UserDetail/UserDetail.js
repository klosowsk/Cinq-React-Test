import React from 'react';
import { Link } from "react-router-dom";

import './UserDetail.css'

const UserDetails = (props) => {
    return (
        <section className="users-detail">
                <h1>{props.user.firstName} {props.user.lastName}</h1>
                <p>Age: {props.user.age}</p>
                <p>Description: {props.user.description}</p>
                <p>
                    <Link to="/"><button>Voltar</button></Link>
                    &nbsp;|&nbsp;
                    <button>Editar</button>
                </p>
        </section>
    )
}

export default UserDetails;