import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReduxCounter from '../ReduxCounter';
import {increase, decrease} from '../ducks-modules/reduxCounter';

const ReduxCounterContainer = () => {
    const number = useSelector(state => state.reduxCounter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);

    return <ReduxCounter number={number} onIncrease={onIncrease()} onDecrease={onDecrease()}/>;
};

export default ReduxCounterContainer;