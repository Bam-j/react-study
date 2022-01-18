import React from 'react';
import {connect} from 'react-redux';
import {setColorBlack, setColorBlue, setColorRed} from '../modules/colorChangerMW';
import ColorChangerMW from '../components/ColorChangerMW';

const ColorChangerContainer = ({text, color, setColorBlack, setColorBlue, setColorRed}) => {
    return (
        <ColorChangerMW text={text} color={color}
                        onSetColorBlack={setColorBlack} onSetColorBlue={setColorBlue} onSetColorRed={setColorRed}/>
    );
};

export default connect(
    ({text, color}) => ({
        text: text,
        color: color,
    }),
    dispatch => ({
        setColorBlack: () => dispatch(setColorBlack()),
        setColorBlue: () => dispatch(setColorBlue()),
        setColorRed: () => dispatch(setColorRed()),
    })
)(ColorChangerContainer);