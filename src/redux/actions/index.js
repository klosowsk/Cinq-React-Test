
export const removeUser = user => ({
  type: 'REMOVE_USER',
  payload: user
})

export const fetchUsersSuccess = users => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users
})

export const fetchUsersFail = users => ({
    type: 'FETCH_USERS_FAIL',
    payload: users
})

export const fetchUsersLoading = payload => ({
    type: 'FETCH_USERS_lOADING',
    payload
})

export const selectAllUsers = () => ({
    type: 'SELECT_ALL'
})

export const unselectAllUsers = () => ({
    type: 'UNSELECT_ALL'
})

export const selectUser = user => ({
    type: 'SELECT_USER',
    payload: user
})

export const unselectUser = user => ({
    type: 'UNSELECT_USER',
    payload: user
})

export const filterUsers = users => ({
    type: 'FILTER_USERS',
    payload: users
})

export const deleteUser = user => ({
    type: 'DELETE_USER',
    payload: user
})

export const deleteUsers = users => ({
    type: 'DELETE_USERS',
    payload: users
})

export const editUser = user => ({
    type: 'EDIT_USER',
    payload: user
})