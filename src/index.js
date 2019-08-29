import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


export let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </BrowserRouter>, 
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderTree(state)})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
