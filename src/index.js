import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//need to wrap the overall app with the Provider component from the react-redux
//library and then pass the store to it and the App

ReactDOM.render(
  <Provider store={store}>
  <App store={store}/>
</Provider>,
  document.getElementById('root')
);
