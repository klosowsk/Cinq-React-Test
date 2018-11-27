import React from 'react';

import './UserActions.scss'

const UserActions = (props) => {
    return (
        <section className="users-actions">
            <label
                htmlFor="filter-name">
                Filter by name:
            </label>
            <input 
                id="filter-name"
                type="text"
                placeholder="Search..."
                />
            <input
                type="button"
                value="Delete selected"
                onClick={()=>console.log('delete...')}
                />
            <input
                type="button"
                value="Download"
                />    
        </section>
    )
}

export default UserActions;