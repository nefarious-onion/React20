import React from 'react';
import './Form.css'

const Form = ({ changeHandler }) => {
    return (
        <div>
            <div className='form'>
                <h1>Task 4: The Form</h1>
                <div className='form__row'>
                    <label> First name</label>
                    <input className='form__input' type='text' name='firstName' onChange={changeHandler} />
                </div>
                <div className='form__row'>
                    <label>Last name</label>
                    <input className='form__input' type='text' name='lastName' onChange={changeHandler} />
                </div>
                <div className='form__row'>
                    <label>Phone</label>
                    <input className='form__input' type='text' name='phone' onChange={changeHandler} />
                </div>
                <div className='form__row'>
                    <label>Message</label>
                    <textarea className='form__input' name='message' onChange={changeHandler} />
                </div>
            </div>
        </div>
    );
}

export default Form;

