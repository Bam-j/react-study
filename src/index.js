import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './codes/redux-tutorial/ducks-modules';

const store = createStore(rootReducer, composeWithDevTools());

ReactDom.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
document.getElementById('root'),
);