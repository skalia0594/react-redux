import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { bugAdded, bugRemoved, bugResolved } from './actions'

store.subscribe(() => console.log("State Change", store.getState()) );

store.dispatch(bugAdded('bug1'));
store.dispatch(bugAdded('bug2'));
store.dispatch(bugRemoved(2));
store.dispatch(bugResolved(1));

console.log(store.getState());

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
