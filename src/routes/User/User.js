import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../redux/actions';
import UserDetail from '../../components/UserDetail/UserDetail'

const User = (props) => {
    const user = props.users.items.filter( item => item.id === Number(props.match.params.id) )
    console.log(user)
    if(user.length && !props.users.loading){
        return (
            <div>
                <UserDetail user={user[0]}/>
            </div>
        )
    } else if ( props.users.loading ){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Any user found...</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
       editUser: user => {
           dispatch(editUser)
       }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)