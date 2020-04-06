import React from 'react';
import './Circle.css'

const Circle = ({clickHandler, id}) => {
    return (
        <div className='circle' id={id} onClick={clickHandler}>
        </div>
    );
}

export default Circle;
