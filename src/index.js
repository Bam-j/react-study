import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './codes/middlewarePractice/modules/index';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);