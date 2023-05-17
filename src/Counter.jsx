import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = (incrementBy) => {
        setCount(count + incrementBy);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => incrementCount(1)}>Increment +1</button>
            <button onClick={() => incrementCount(10)}>Increment +10</button>
        </div>
    );
}

export default Counter;
