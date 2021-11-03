import React, {useState} from 'react';

const StatePracFunc = () => {
    const [msg, setMsg] = useState('');
    const onClickerEnter = () => setMsg('안녕하세요.');
    const onClickerLeave = () => setMsg('안녕히 가세요.');

    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={onClickerEnter}>입장</button>
            <button onClick={onClickerLeave}>퇴장</button>
        </div>
    );
};

export default StatePracFunc;