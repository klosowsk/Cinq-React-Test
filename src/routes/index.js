import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { fetchUsersSuccess, fetchUsersFail, fetchUsersLoading } from '../redux/actions';
import { apiaddress } from '../constants'

import Home from './Home/Home';
import User from './User/User';
import NotFound from './NotFound/NotFound';

const Routes = (props) => {

    useEffect(() => {
        props.fetchUsersLoading()
        axios.get(`${apiaddress}/users.json`)
        .then( res => {
            props.fetchUsers(res.data)
        })
        .catch( error => {
            props.fetchUsersFail(error)
        })
    }, []);
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user/:id" component={User} />
                <Route component={NotFound} />
            </Switch>
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
        },
        fetchUsersLoading: () => {
            dispatch(fetchUsersLoading())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes)