import React from 'react';
import Media from "react-media";
import { connect } from 'react-redux';

import UsersList from '../../components/UsersList/UsersList'
import UsersCards from '../../components/UsersCards/UsersCards'
import UserActions from '../../components/UserActions/UserActions'

const Home = (props) => {
    return (
        <div>
            <UserActions />
            <Media query="(max-width: 1024px)">
                { matches => matches ? <UsersCards users={props.users}/> : <UsersList users={props.users}/> }
            </Media>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      users: state.users
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: users => {
//             dispatch(fetchUsersSuccess(users))
//         },
//         fetchUsersFail: error => {
//             dispatch(fetchUsersFail(error))
//         }
//     }
// }

export default connect(
    mapStateToProps,
    //mapDispatchToProps
)(Home)