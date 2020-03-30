import React from 'react';
import './Header.css';

export const Header = () => {
    const date = new Date();
    return (
        <div className='header'>
            <h1>Task 3: Counter</h1>
            <p>{date.toDateString()}</p>
        </div>
    )
}