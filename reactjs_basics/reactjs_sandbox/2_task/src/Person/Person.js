
import React from "react";
import "./Person.css";

//functional component, that has a parameter of props
const Person = props => {
  return (
    <div className="persons-card">
      <p>
        I am {props.name} and I am {props.age} years old.
      </p>
    </div>
  );
};
export default Person;