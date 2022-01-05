import {combineReducers} from 'redux';
import reduxCounter from './reduxCounter';
import todos from './todos';

const rootReducer = combineReducers({reduxCounter, todos});

export default rootReducer;