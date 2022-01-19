import React from 'react';
import {connect} from 'react-redux';
import {setColorBlack, setColorBlue, setColorRed} from '../modules/colorChangerMW';
import ColorChangerMW from '../components/ColorChangerMW';
import {bindActionCreators} from 'redux';

const ColorChangerContainer = ({text, color, setColorBlack, setColorBlue, setColorRed}) => {
    return (
        <ColorChangerMW text={text} color={color}
                        onSetColorBlack={setColorBlack} onSetColorBlue={setColorBlue} onSetColorRed={setColorRed}/>
    );
};

export default connect(
    state => ({
        text: state.colorChangerMW.text,
        color: state.colorChangerMW.color,
    }),
    dispatch => bindActionCreators(
        {
            setColorBlack,
            setColorBlue,
            setColorRed,
        },
        dispatch
    ),
)(ColorChangerContainer);