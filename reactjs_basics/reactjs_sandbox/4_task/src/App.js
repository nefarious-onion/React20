import React, { Component } from 'react';
import Form from './Form/Form';
import Formview from './Formview/Formview';
import './App.css';

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
      <div className='container'>
        <Form changeHandler={this.changeHandler}/>
        <Formview firstName={this.state.firstName} lastName={this.state.lastName} phone={this.state.phone} message={this.state.message} />
      </div>
    );
  }
}

export default App;

