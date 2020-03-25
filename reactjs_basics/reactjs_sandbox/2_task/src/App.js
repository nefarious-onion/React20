import React, { Component } from "react";
//import Person from "./Person/Person";
import {Persons} from "./Persons/Persons";

//class App is a root component that starts the application
//App renders a list of persons
//person is a functional component -> no state pproperty, state in functional component has to be done with hooks
class App extends Component {
  //component has a state
  state = {
    persons: [
      { name: "Margit", age: 39 },
      { name: "Criselle", age: 20 },
      { name: "Karin", age: 42 }
    ]
  };
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Persons list={this.state.persons} />
        {/* if functions are used inside render-method, they need to return jsx element (= component or a list of components) */}
        {/* {this.state.persons.map(person => {
          return (
            <Person name={person.name} age={person.age} />
          )
        })}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name='Kalle' age={6*9} /> */}
      </div>
    );
  }
}

export default App;
