import React, {useReducer} from 'react';

function reducer(state, action) {
  if (action.type === 'increase_count') {
    return (
      {value: state.value + 1}
    );
  }
}

const CountUp = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const handleClick = () => dispatch({type: 'increase_count'});

  return (
    <>
      <h2>{state.value}</h2>
      <button onClick={() => {
        dispatch({type: 'increase_count'})
      }}>+</button>
    </>
  );
};

export default CountUp;