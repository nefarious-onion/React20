import React from 'react';

const Form = ({changeHandler}) => {
    return (
        <div>
                  
            <input type='text' name='firstName' onChange={changeHandler} />
            <input type='text' name='lastName' onChange={changeHandler} />
            <input type='text' name='phone' onChange={changeHandler} />
            <textarea name='message' onChange={changeHandler} />

        </div>
    );
}

export default Form;

