import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import List from './components/list.js';


export const App = () => (
    <Provider store={store}>
        <div>
            <h1>Redux example #5</h1>
            <List />
        </div>
    </Provider>
);
