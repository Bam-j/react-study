import React, {useState} from 'react';

const Counter2 = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count => count+1);
        console.log('click');

        setCount(count => count+1);
        console.log('click');
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClick}>+</button>
        </div>
    );
}

export default Counter2;