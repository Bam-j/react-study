import React from 'react';
import ReduxCounterContainer from './codes/redux-tutorial/containers/ReduxCounterContainer';
import TodosContainer from './codes/redux-tutorial/containers/TodosContainer';

const App = () => {
    return (
        <div>
            <ReduxCounterContainer/>
            <hr/>
            <TodosContainer/>
        </div>
    );
};

export default App;
