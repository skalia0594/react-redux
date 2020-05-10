import * as actions from './actionTypes';
import axios from 'axios';

export const buyCake = description => ({
    type: actions.BUY_CAKE,
    payload: {
        description: description
    }
});
export const buyIceCream = description => ({
    type: actions.BUY_ICECREAM,
    payload: {
        description : description
    }
});

//async actions
const fetchUserRequest = () => ({
    type: actions.FETCH_USER_REQUEST    
});
const fetchUserSuccess = (users) => ({
    type: actions.FETCH_USER_SUCCESS,
    payload: users
});
const fetchUserError = (error) => ({
    type: actions.FETCH_USER_ERROR,
    payload: error
}); 

export const fetchUsers = () => {
    return async function(dispatch){
        try {
            dispatch(fetchUserRequest());
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = await response.data.map(user => user.name);
            // console.log(users);
            dispatch(fetchUserSuccess(users));
        } catch (err) {
            dispatch(fetchUserError(err.message));
        }
    }
}
