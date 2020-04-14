import React from 'react';
import './Circle.css'

const Circle = ({ clickHandler, id, active, clicked, level}) => {

    const circleClassName = level === 2 ? 'level2 circle' : 'circle' | level === 3 ? 'level3 circle' : 'circle';
    const activeClassName = active === true ? 'active' : '';
    const clickedClassName = clicked === true ? 'clicked' : '';

    return (
        <div
            id={id}
            onClick={clickHandler}
            className={circleClassName + ' ' +  activeClassName + ' ' + clickedClassName} >
        </div>
    );
}

export default Circle;
