import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { fetchUsersSuccess, fetchUsersFail } from '../redux/actions';

import Home from './Home/Home';
import User from './User/User';

const Routes = (props) => {

    useEffect(() => {
        axios.get('users.json')
        .then( res => {
            props.fetchUsers(res.data)
        })
        .catch( error => {
            props.fetchUsersFail(error)
        })
    }, []);

    return (
        <Router>
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
        </div>
        </Router>
    );
}

const mapStateToProps = state => {
    return {
      users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: users => {
            dispatch(fetchUsersSuccess(users))
        },
        fetchUsersFail: error => {
            dispatch(fetchUsersFail(error))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes)