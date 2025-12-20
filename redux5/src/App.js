import React from 'react';
import { Provider } from 'react-redux';
import { loadCompanyThunk } from './redux/red1.js';
import store from './redux/store.js';
import List from './components/list.js';



export const App = () => (
    <Provider store={store}>
        <div>
            <List />
        </div>
    </Provider>
);
