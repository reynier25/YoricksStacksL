//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { persistStore, autoRehydrate } from 'redux-persist';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store} />, root);

});


// persistStore(store, {}, () => {
//     ReactDOM.render(<Root store={store} />, root);
// })