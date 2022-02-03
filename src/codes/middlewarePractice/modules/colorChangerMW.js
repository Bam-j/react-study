import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery} from 'redux-saga/effects';

const SET_COLOR_BLACK = 'colorChangerMW/SET_COLOR_BLACK';
const SET_COLOR_BLUE = 'colorChangerMW/SET_COLOR_BLUE';
const SET_COLOR_RED = 'colorChangerMW/SET_COLOR_RED';

const SET_COLOR_BLACK_ASYNC = 'colorChangerMW/SET_COLOR_BLACK_ASYNC';
const SET_COLOR_BLUE_ASYNC = 'colorChangerMW/SET_COLOR_BLUE_ASYNC';
const SET_COLOR_RED_ASYNC = 'colorChangerMW/SET_COLOR_RED_ASYNC';

export const setColorBlack = createAction(SET_COLOR_BLACK);
export const setColorBlue = createAction(SET_COLOR_BLUE);
export const setColorRed = createAction(SET_COLOR_RED);

export const setColorBlackAsync = createAction(SET_COLOR_BLACK_ASYNC, () => undefined);
export const setColorBlueAsync = createAction(SET_COLOR_BLUE_ASYNC, () => undefined);
export const setColorRedAsync = createAction(SET_COLOR_RED_ASYNC, () => undefined);

function* setColorBlackSaga() {
    yield delay(1000);
    yield put(setColorBlack());
}

function* setColorBlueSaga() {
    yield delay(1000);
    yield put(setColorBlue());
}

function* setColorRedSaga() {
    yield delay(1000);
    yield put(setColorRed());
}

export function* colorChangerSaga() {
    yield takeEvery(SET_COLOR_BLACK_ASYNC, setColorBlackSaga);
    yield takeEvery(SET_COLOR_BLUE_ASYNC, setColorBlueSaga);
    yield takeEvery(SET_COLOR_RED_ASYNC, setColorRedSaga);
}

const initialState = {
    text: '검정',
    color: '#000',
};

const colorChangerMW = handleActions(
    {
        [SET_COLOR_BLACK]: (state, action) => ({
            text: '검정',
            color: '#000',
        }),
        [SET_COLOR_BLUE]: (state, action) => ({
            text: '파랑',
            color: '#00f',
        }),
        [SET_COLOR_RED]: (state, action) => ({
            text: '빨강',
            color: '#f00',
        }),
    },
    initialState
);

export default colorChangerMW;