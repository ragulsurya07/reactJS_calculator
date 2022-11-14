import { useState } from 'react';

const [value, setValue] = useState(0);

const count = () => {
    setValue(value + 1);
}

function Practice() {
    return (

        <div>
            <p>The number {value} is my lucky number.</p>
            <button onClick={count}>Click</button>
        </div>

    )
}

export default Practice;