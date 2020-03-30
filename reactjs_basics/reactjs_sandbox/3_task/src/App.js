import React, { Component } from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

class App extends Component {
  state = {
    likes: 0
  }

  // class methods don't need const when you declare them
  // using arrow method declaration makes sure this keyword refers to the instance of class it was declared within
  addHandler = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }
  removeHandler = () => {
    this.setState({
      likes: this.state.likes - 1
    });
  }
  resetHandler = () => {
    this.setState({
      likes: 0
    })
  }
  render() {
    return (
      <div className='bg'>
        <Header />
        <div className='container'>
          <div className=
              {this.state.likes === 0 ? 'likes' :
                this.state.likes % 2 === 0 ? 'likes even' :
                  'likes odd'}>
            <h1>Total likes: </h1>
            <div className='likeBox'>{this.state.likes}</div>
          </div>
          <div className='buttons'>
            {/* function is inside the class so we need this keyword */}
            <button className='btn' onClick={this.addHandler} >Add like</button>
            <button className='btn' onClick={this.removeHandler} >Remove like</button>
            <button className='btn' onClick={this.resetHandler} >Reset likes</button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
