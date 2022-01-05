import React from 'react';
import {connect} from 'react-redux';
import ReduxCounter from '../ReduxCounter';
import {decrease, increase} from '../ducks-modules/reduxCounter';
import {bindActionCreators} from 'redux';

const ReduxCounterContainer = ({number, increase, decrease}) => {
    return <ReduxCounter number={number} onIncrease={increase} onDecrease={decrease}/>;
};

export default connect(
    state => ({number: state.reduxCounter.number}),
    {
        increase,
        decrease,
    },
)(ReduxCounterContainer);