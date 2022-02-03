import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer, {rootSaga} from './codes/middlewarePractice/modules';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);