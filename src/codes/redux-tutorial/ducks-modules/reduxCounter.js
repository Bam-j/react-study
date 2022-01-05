const INCREASE = 'reduxCounter/INCREASE';
const DECREASE = 'reduxCounter/DECREASE';

export const increase = () => ({
    type: INCREASE,
});

export const decrease = () => ({
    type: DECREASE,
});

const initialState = {
    number: 0
};

function reduxCounter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
};

export default reduxCounter;