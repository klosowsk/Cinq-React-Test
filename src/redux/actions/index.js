
export const removeUser = payload => ({
  type: 'REMOVE_USER',
  payload
})

export const fetchUsersSuccess = payload => ({
    type: 'FETCH_USERS_SUCCESS',
    payload
})

export const fetchUsersFail = payload => ({
    type: 'FETCH_USERS_FAIL',
    payload
})