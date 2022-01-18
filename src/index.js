import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './codes/middlewarePractice/modules/index';

const store = createStore(rootReducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);