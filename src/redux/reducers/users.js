
const initialState = {
    items: [],
    search: '',
    loading: true,
    error: null
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return state
        case 'FETCH_USERS_lOADING': 
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                items: action.payload.map( item => ({...item, selected: false}))
            }
        case 'FETCH_USERS_FAIL':
            return {
                items: [],
                loading: false,
                error: action.payload
            }
        case 'SELECT_ALL':
            return {
                ...state,
                items: state.items.map( item => ({...item, selected: true}))
            }
        case 'UNSELECT_ALL':
            return {
                ...state,
                items: state.items.map( item => ({...item, selected: false}))
            }
        case 'SELECT_USER':
            return {
                ...state,
                items: state.items.map( item => item.id === action.payload ? {...item, selected:true} : item)
            }
        case 'UNSELECT_USER':
            return {
                ...state,
                items: state.items.map( item => item.id === action.payload ? {...item, selected:false} : item)
            }
        case 'FILTER_USERS':
            return {
                ...state,
                search: action.payload
            }
        case 'DELETE_USER':
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload )
            }
        case 'DELETE_USERS':
            return {
                ...state,
                items: state.items.filter( item => !item.selected )
            }
        case 'EDIT_USER':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default users;