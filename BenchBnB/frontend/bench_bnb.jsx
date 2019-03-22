import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState;
    // const store = configureStore(preloadedState);

    // testing
    // window.store = store;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // testing
    ReactDOM.render(<h2>Something</h2>, root)
});