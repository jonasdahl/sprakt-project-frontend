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

    if (value.length > 0) {
      fetch('http:/' + '/localhost:5000/suggest/' + encodeURIComponent(value))
        .then(res => res.json())
        .catch(error => {})
        .then(res => {
          this.setState({suggestions: res})
        })
    }

    const words = value.split(' ')
    if (false && words.length > 0 && words[words.length - 1].length > 0) {
      fetch('http:/' + '/localhost:5000/autocorrect/' + encodeURIComponent(words[words.length - 1]))
        .then(res => res.json())
        .catch(error => {})
        .then(res => {
          console.log(res)
          this.setState({corrections: res})
        })
    }
  }

  append(str, e) {
    const val = this.state.value.split(' ').slice(0,-1).join(' ') + ' ' + str + ' '
    this.sync(this.state.keysDown, val)
    this.setState({value: val})
    if (this.ref) this.ref.focus()
  }

  correct(str, e) {
    const val = this.state.value.split(' ').slice(0,-1).join(' ') + ' ' + str
    this.sync(this.state.keysDown, val)
    this.setState({value: val})
    if (this.ref) this.ref.focus()
  }

  keyPressed(letter, type) {
    if (type) {
      if (type == 'backspace' && this.state.value.length() > 0) {
        this.setState({value: this.state.value.slice(0,-1)})
      }
    } else {
      this.setState({value: this.state.value + letter})
    }
    if (this.ref) this.ref.focus()
  }

  render() {
    console.log(this.state.keysDown)
    return (
      <div className="App">
        <div className="inner">
          <Input inputRef={ref => this.ref = ref} callback={this.sync.bind(this)} onChange={e => this.setState({value: e.target.value})} value={this.state.value} />
          <Suggestions suggestions={this.state.corrections} title="corrections" onSelect={this.correct.bind(this)} />
          <Suggestions suggestions={this.state.suggestions} title="suggestions" onSelect={this.append.bind(this)} />
          <Keyboard keysDown={this.state.keysDown} onKeyPress={this.keyPressed.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
