import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import colorChangerMW, {colorChangerSaga} from './colorChangerMW';

const rootReducer = combineReducers({
    colorChangerMW,
});

export function* rootSaga() {
    yield all([colorChangerSaga()]);
}

export default rootReducer;

