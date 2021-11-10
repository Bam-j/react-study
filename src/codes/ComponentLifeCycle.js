import React from 'react';

class ComponentLifeCycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            destroyed: false,
        };

        console.log("constructor() 메소드 호출");
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps() 메소드 호출");

        return {};
    }

    componentDidMount() {
        console.log("componentDidMount() 메소드 호출");

        this.setState({updated: true});
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate() 메소드 호출");

        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate() 메소드 호출");

        return {};
    }

    componentDidUpdate() {
        console.log("componentDidUpdate() 메소드 호출");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount() 메소드 호출")
    }

    render() {
        console.log("render() 메소드 호출");

        return null;
    }
}

export default ComponentLifeCycle;