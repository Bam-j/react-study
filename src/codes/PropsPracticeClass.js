import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropsPracticeClass extends Component {
    static defaultProps = {
        data: "기본으로 설정된 값입니다."
    };

    static propTypes = {
        data: PropTypes.string,
    };

    render() {
        const {data, children} = this.props;

        return (
            <div>
                props 익히기=> {data} <br />
                컴포넌트 사이의 내용 => {children}
            </div>
        );
    }
}

/*
PropsPracticeClass.defaultProps = {
    data: "기본으로 설정된 값입니다."
}

PropsPracticeClass.propTypes = {
    data: PropTypes.string.isRequired,
};
*/

export default PropsPracticeClass;