import {createAction, handleActions} from 'redux-actions';

const SET_COLOR_BLACK = 'colorChangerMW/SET_COLOR_BLACK';
const SET_COLOR_BLUE = 'colorChangerMW/SET_COLOR_BLUE';
const SET_COLOR_RED = 'colorChangerMW/SET_COLOR_RED';

export const setColorBlack = createAction(SET_COLOR_BLACK);
export const setColorBlue = createAction(SET_COLOR_BLUE);
export const setColorRed = createAction(SET_COLOR_RED);

const initialState = {
    text: '검정',
    color: '#000',
};

const colorChangerMW = handleActions(
    {
        [SET_COLOR_BLACK]: (text, color) => ({
            text: 'bb',
            color: '#000',
        }),
        [SET_COLOR_BLUE]: (state, action) => ({
            text: state.text = action.payload
        }),
        [SET_COLOR_RED]: (state, action) => ({
            text: '빨강',
            color: '#f00',
        }),
    },
    initialState
);

export default colorChangerMW;