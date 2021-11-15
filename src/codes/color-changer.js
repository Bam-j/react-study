import React, {Fragment, useState} from 'react';

const ColorChanger = () => {
    const [colorText, setColorText] = useState('검정');
    const [color, setColor] = useState('black');

    return (
        <Fragment>
            <h1>현재 색상은 <span style={{color}}>{colorText}</span>입니다.</h1>
            <button onClick={() => {
                setColor('black');
                setColorText('검정');
            }}>
                검정
            </button>
            <button onClick={() => {
                setColor('red');
                setColorText('빨강');
            }}>
                빨강
            </button>
            <button onClick={() => {
                setColor('blue');
                setColorText('파랑');
            }}>
                파랑
            </button>
        </Fragment>
    );
};

export default ColorChanger;