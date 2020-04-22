import React, { Component } from 'react';
import './Lecture.css';
import Button from '../Button/Button';

class Lecture extends Component {

    state = {
        counter: 0
    }

    addHandler = () => this.setState({ counter: this.state.counter + 1 });
    removeHandler = () => this.setState({ counter: this.state.counter - 1 });
    resetHandler = () => this.setState({ counter: 0 });

    render() {
        return (
            <div className="container">
                <div className="vote-box" >
                    <h1>These are my votes:</h1>
                    <h2> {this.state.counter}</h2>
                    <button onClick={this.addHandler}>Add one</button>
                    <button onClick={this.removeHandler}>Remove one</button>
                    <button onClick={this.resetHandler}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Lecture;

