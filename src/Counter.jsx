import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const incrementCountByTen = () => {
        setCount(count + 10);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Increment +1</button>
            <button onClick={incrementCountByTen}>Increment +10</button>
        </div>
    );
}

export default Counter;
