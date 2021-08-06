import React, { Fragment, useState } from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000');

    const handleClick = function () {
        setColor(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`);
    }

    return (
        <Fragment>
            <h2>ex05: Hook of Functional Component</h2>
            <button onClick={handleClick}>색상변경</button>
            <br />
            <LifeCycle color={color} />
        </Fragment>
    );
}