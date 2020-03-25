import React from "react";
import Person from "../Person/Person";

export const Persons = props => {
    return (
        <div className='persons'>
            {props.list.map(person => {
                return (
                    <Person name={person.name} age={person.age}/>
                );
            })}
        </div>
    );
}
// export default Persons;