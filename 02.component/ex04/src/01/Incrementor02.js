import React, { useState } from 'react';

export default function({begin, step}) {
    const [ value, setValue ] = useState(begin);

    const onClickButton = function() {
        setValue(value + step);
    }

    const onClickButton2 = function() {
        setValue(value - step);
    }

    return (
        <div>
            <button onClick={ onClickButton2 }>
                <strong>-</strong>
            </button>
            { ' ' }
            <span>{ value }</span>
            { ' ' }
            <button onClick={ onClickButton }>
                <strong>+</strong>
            </button>
        </div>
    )
}