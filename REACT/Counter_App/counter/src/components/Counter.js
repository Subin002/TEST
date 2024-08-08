import React, { useState } from 'react';

function Counter() {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };

    return (
        <div>
            <div className='counter'>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                <div>{value}</div>
            </div>
        </div>
    );
}

export default Counter;
