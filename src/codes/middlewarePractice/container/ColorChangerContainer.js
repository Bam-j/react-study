import React from 'react';
import {connect} from 'react-redux';
import {setColorBlackAsync, setColorBlueAsync, setColorRedAsync} from '../modules/colorChangerMW';
import ColorChangerMW from '../components/ColorChangerMW';
import {bindActionCreators} from 'redux';

const ColorChangerContainer = ({text, color, setColorBlackAsync, setColorBlueAsync, setColorRedAsync}) => {
    return (
        <ColorChangerMW text={text} color={color}
                        onSetColorBlack={setColorBlackAsync} onSetColorBlue={setColorBlueAsync} onSetColorRed={setColorRedAsync}/>
    );
};

export default connect(
    state => ({
        text: state.colorChangerMW.text,
        color: state.colorChangerMW.color,
    }),
    dispatch => bindActionCreators(
        {
            setColorBlackAsync,
            setColorBlueAsync,
            setColorRedAsync,
        },
        dispatch
    ),
)(ColorChangerContainer);