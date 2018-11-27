import React from 'react';
import fileDownload from 'react-file-download';

import './UserActions.css'

const UserActions = (props) => {
    const disableDelete = props.users.items.every(  item => !item.selected )
    
    const changeText = (ev) => {
        const value = ev.target.value 
        props.filterUsers(value)
    }

    const exportFile = () => {
        //Cleans aux keys from user object
        const obj = props.users.items.map( user => {
            return Object.keys(user).reduce((result, key) => {
            if(key !== "selected") {
                result[key] = user[key];
            }
            return result;
            }, {});
        }) 
        fileDownload( JSON.stringify(obj, null, 0x0A), 'users.json', 'application/json');
    }

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
                value={props.users.search}
                onChange={changeText}
                />
            <input
                type="button"
                value="Delete selected"
                disabled={disableDelete}
                onClick={()=>props.deleteUsers()}
                />
            <input
                type="button"
                value="Download"
                onClick={()=>exportFile()}
                />    
        </section>
    )
}

export default UserActions;