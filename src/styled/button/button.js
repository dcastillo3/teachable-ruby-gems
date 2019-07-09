import React from 'react';

const Button = props => {
    const { buttonType, buttonAction } = props;

    return (
        <button type={buttonType} onClick={buttonAction}>{props.children}</button>
    )
}

export default Button;