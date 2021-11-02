import React from 'react';
import PropTypes from 'prop-types';

const PropsPractice = ({data, children}) => {
    return (
        <div>
            props 익히기=> {data} <br />
            컴포넌트 사이의 내용 => {children}
        </div>
    );
};

PropsPractice.defaultProps = {
    data: "기본으로 설정된 값입니다."
};

PropsPractice.propTypes = {
    data: PropTypes.string.isRequired,
};

export default PropsPractice;

/* 비구조화 할당 이전 코드
const PropsPractice = props => {
    return (
        <div>
            props 익히기=> {props.data} <br />
            컴포넌트 사이의 내용 => {props.children}
        </div>
    );
};
 */