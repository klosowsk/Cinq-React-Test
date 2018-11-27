
const initialState = {
    items: [],
    loading: false,
    error: null
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return state
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                items: action.payload.map( item => ({...item, selected: false}))
            }
        case 'FETCH_USERS_FAIL':
            return {
                items: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default users;