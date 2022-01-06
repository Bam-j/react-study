import {createAction, handleActions} from 'redux-actions'

const INCREASE = 'reduxCounter/INCREASE';
const DECREASE = 'reduxCounter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

const reduxCounter = handleActions(
    {
        [INCREASE]: (state, action) => ({number: state.number + 1}),
        [DECREASE]: (state, action) => ({number: state.number - 1}),
    },
    initialState,
);

export default reduxCounter;