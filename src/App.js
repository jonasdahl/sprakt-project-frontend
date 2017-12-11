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
      value: '',
      suggestions: []
    }
  }

  sync(keysDown, value) {
    this.setState({keysDown, value})

    fetch('http:/' + '/localhost:5000/' + encodeURIComponent(value))
      .then(res => res.json())
      .catch(error => {})
      .then(res => {
        this.setState({suggestions: res})
      })
  }

  append(str) {
    this.sync(this.state.keysDown, this.state.value + ' ' + str)
    this.setState({ value: this.state.value + ' ' + str })
  }

  render() {
    return (
      <div className="App">
        <div className="inner">
          <Input callback={this.sync.bind(this)} onChange={e => this.setState({value: e.target.value})} value={this.state.value} />
          <Suggestions suggestions={this.state.suggestions} onSelect={this.append.bind(this)} />
          <Keyboard keysDown={this.state.keysDown} />
        </div>
      </div>
    );
  }
}

export default App;
