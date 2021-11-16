import React, {Fragment, useState, useMemo} from 'react';

const getTotal = numbers => {
    let total = 0;

    console.log('getTotal() 호출');

    numbers.forEach(value => {
        total += value;
    });

    return total;
};

const AddInputNum = () => {
    const [numbers, setNumbers] = useState([]);
    const [input, setInput] = useState('');

    const onChange = e => {
        setInput(e.target.value);
    };

    const onInsert = e => {
        const nextNumber = numbers.concat(parseInt(input));

        setNumbers(nextNumber);
        setInput('');
    };

    const total = useMemo(() => getTotal(numbers), [numbers]);

    return (
        <Fragment>
            <input value={input} onChange={onChange}/>
            <button onClick={onInsert}>입력</button>
            <div>
                <span>총합: </span>{total}
            </div>
        </Fragment>
    );
};

export default AddInputNum;