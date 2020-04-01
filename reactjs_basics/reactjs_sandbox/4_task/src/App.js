import React, { Component } from 'react';
import Form from './Form/Form';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  }

  changeHandler = event => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    
    this.setState({
      [inputName]: inputValue
    })
  }

  render() {
    return (
      <div>
        <Form changeHandler={this.changeHandler.bind(this)}/>
        <p>First name: {this.state.firstName} </p>
        <p>Last name: {this.state.lastName} </p>
        <p>Phone: {this.state.phone} </p>
        <p>Message: {this.state.message} </p>
      </div>
    );
  }
}

export default App;

