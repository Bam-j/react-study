import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        otherNumber: 404,
    };

    render() {
        const {count, otherNumber} = this.state;

        return (
            <div>
                <h1>{count}</h1>
                <p>state에 여러 값이 올 수도 있습니다: {otherNumber}</p>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    }, () => {
                        console.log("count가 1 증가했습니다.");
                    });
                }}>
                    +
                </button>
            </div>
        );
    }
}

export default Counter;