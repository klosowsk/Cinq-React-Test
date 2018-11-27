import React from 'react';
import Media from "react-media";
import { connect } from 'react-redux';

import UsersList from '../../components/UsersList/UsersList'
import UsersCards from '../../components/UsersCards/UsersCards'
import UserActions from '../../components/UserActions/UserActions'

import { selectAllUsers, unselectAllUsers, selectUser, unselectUser, filterUsers, deleteUser, deleteUsers } from '../../redux/actions'

const Home = (props) => {
    return (
        <div>
            <UserActions users={props.users} filterUsers={props.filterUsers} deleteUsers={props.deleteUsers}/>
            <Media query="(max-width: 1024px)">
                { matches => matches ? 
                    <UsersCards 
                        users={props.users}
                        selectUser={props.selectUser}
                        unselectUser={props.unselectUser} 
                        deleteUser={props.deleteUser}
                        /> 
                    : 
                    <UsersList 
                        users={props.users} 
                        selectAllUsers={props.selectAllUsers} 
                        unselectAllUsers={props.unselectAllUsers}
                        selectUser={props.selectUser}
                        unselectUser={props.unselectUser}
                        deleteUser={props.deleteUser}
                        /> 
                }
            </Media>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectAllUsers: () => {
            dispatch(selectAllUsers())
        },
        unselectAllUsers: () => {
            dispatch(unselectAllUsers())
        },
        selectUser: id => {
            dispatch(selectUser(id))
        },
        unselectUser: id => {
            dispatch(unselectUser(id))
        },
        filterUsers: str => {
            dispatch(filterUsers(str))
        },
        deleteUser: id => {
            dispatch(deleteUser(id))
        },
        deleteUsers: id => {
            dispatch(deleteUsers(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)