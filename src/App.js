import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DessertStore from './components/DessertStore'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DessertStore />
      </div>
    </Provider>
  );
}

export default App;
