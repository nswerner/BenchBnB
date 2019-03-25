import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as sessionActions from './actions/session_actions';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState;
    const store = configureStore(preloadedState);

    // testing

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signUp = sessionActions.signup;
    window.signIn = sessionActions.signin;
    window.signOut = sessionActions.signout;

    // testing
    
    ReactDOM.render(<Root store={store}/>, root)
});