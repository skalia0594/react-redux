import * as actions from './actionTypes'

const initialCakeState = {
    numberOfCakes : 5
}
const initialIceCreamState = {
    numberOfIceCream : 10
}
export const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
       case actions.BUY_CAKE: return {
           ...state,
           numberOfCakes: state.numberOfCakes - 1
       }
        default:
            return state;
    }
}
export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
       case actions.BUY_ICECREAM: return {
           ...state,
           numberOfIceCream: state.numberOfIceCream - 1
       }
        default:
            return state;
    }
}

const initialFetchUserState = {
    loading: true,
    users: [],
    error: ''
}
export const fetchUserReducer = (state = initialFetchUserState, action) => {
    switch (action.type) {
        case actions.FETCH_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case actions.FETCH_USER_SUCCESS : return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }     
        case actions.FETCH_USER_ERROR : return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }
        default:
            return state;
    }
}