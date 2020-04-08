import React from 'react';
import './Circle.css'

const Circle = ({ clickHandler, id, current }) => {

    return (
        <div 
            id={id}
            onClick={clickHandler}
            className={id === current
                ? 'circle active'
                : 'circle'} >
        </div>
    );
}

export default Circle;
