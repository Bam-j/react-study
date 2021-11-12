import React, {Component} from 'react';

class RefPractice extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    render() {
        return (
            <div ref={this.myRef}/>
        );
    }
};

export default RefPractice;