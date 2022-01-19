import React from 'react';

const ColorChangerMW = ({text, color, onSetColorBlack, onSetColorBlue, onSetColorRed}) => {
    return (
        <div>
            <h1 style={{color}}>{text}</h1>
            <button onClick={onSetColorBlack}>검정</button>
            <button onClick={onSetColorBlue}>파랑</button>
            <button onClick={onSetColorRed}>빨강</button>
        </div>
    );
};

export default ColorChangerMW;