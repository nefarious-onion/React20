import React from 'react';
import './Formview.css'

const Formview = ({ firstName, lastName, phone, message }) => {
    return (
        <div className='paper'>
            <div className='pattern'>
            <p className='content'> <strong>First name:</strong> {firstName}</p> 
            <p className='content'><strong>Last name:</strong>  {lastName} </p>
            <p className='content'><strong>Phone: </strong>{phone} </p>
            <p className='content'><strong>Message:</strong> {message} </p>
            </div>         
        </div>
    );
}

export default Formview;
