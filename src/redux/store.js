import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk/';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cakeReducer, iceCreamReducer, fetchUserReducer } from './reducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: fetchUserReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;