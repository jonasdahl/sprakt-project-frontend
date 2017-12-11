import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import Suggestions from './Suggestions.js';
import Keyboard from './Keyboard.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      keysDown: [],
      value: ''
    }
  }

  sync(keysDown, value) {
    this.setState({keysDown, value})
  }

  render() {
    return (
      <div className="App">
        <div className="inner">
          <Input callback={this.sync.bind(this)} />
          <Suggestions />
          <Keyboard keysDown={this.state.keysDown} />
        </div>
      </div>
    );
  }
}

export default App;
