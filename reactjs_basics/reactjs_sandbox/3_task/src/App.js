import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  }

  addHandler = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }
  removeHandler = () => {
    this.setState({
      likes: this.state.likes -1
    });
  }
  resetHandler = () => {
    this.setState({
      likes: 0
    })
  }
  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
        {/* function is inside the class so we need this keyword */}
        <button onClick={this.addHandler} >Add like</button>
        <button onClick={this.removeHandler} >Remove like</button>
        <button onClick={this.resetHandler} >Reset likes</button>
      </div>
    );
  }
}

export default App;
