import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import allPosts from './reducers/allPosts.js'
import postsForm from './reducers/postsForm';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';

const reducer = combineReducers({
  allPosts,
  postsForm,
  currentUser,
  loginForm

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer, 
  composeEnhancer(applyMiddleware(thunk))
)


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
