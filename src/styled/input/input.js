import React from 'react';

const Input = props => {
    const { inputValue, inputChange } = props;

    return (
        <input type="text" value={inputValue} onChange={inputChange} />
    )
}

export default Input;