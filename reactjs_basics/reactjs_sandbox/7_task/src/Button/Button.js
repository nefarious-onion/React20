import React from 'react';

const Button = ({eventHandler, buttonText}) => {
    const divStyle = {
        display: 'inline-block'
    }

    return (
        <div style={divStyle}>
            <button onClick={eventHandler}>{buttonText}</button>
        </div>
    );
}

export default Button;
