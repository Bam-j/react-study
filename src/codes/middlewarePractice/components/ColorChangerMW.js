import React from 'react';

const ColorChangerMW = ({text, color, setColorBlack, setColorBlue, setColorRed}) => {
    return (
        <div>
            <h1 style={{color}}>{text}</h1>
            <button onClick={setColorBlack}>검정</button>
            <button onClick={setColorBlue}>파랑</button>
            <button onClick={setColorRed}>빨강</button>
        </div>
    );
};

export default ColorChangerMW;