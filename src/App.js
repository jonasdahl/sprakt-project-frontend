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

  componentDidMount() {
    this.sync([], '')
  }

  sync = (keysDown, value, e) => {
    this.setState({keysDown, value})

    if (value) {
      fetch('http://localhost:5000/suggest/' + encodeURIComponent(value))
        .then(res => res.json())
        .catch(error => {})
        .then(res => {
          this.setState({suggestions: res})
        })
    }

    const words = value.split(' ')
    if (words.length > 0 && words[words.length - 1].length > 0) {
      fetch('http://localhost:5000/autocorrect/' + encodeURIComponent(words[words.length - 1]))
        .then(res => res.json())
        .catch(error => {})
        .then(res => {
          console.log(res)
          this.setState({corrections: res})
        })
    }

    if (e && e.type === 'keydown' && e.keyCode === 9 && this.state.suggestions.length) {
      e.preventDefault()
      e.stopPropagation()
      this.append(this.state.suggestions[0][0])({})
    }
  }

  append = str => e => {
    const space = this.state.value.split(' ').length === 1 ? '' : ' '
    const val = this.state.value.split(' ').slice(0,-1).join(' ') + space + str + ' '
    this.sync(this.state.keysDown, val, e)
    this.setState({value: val})
    document.getElementById('textarea').focus()
  }

  correct = str => e => {
    const val = this.state.value.split(' ').slice(0,-1).join(' ') + ' ' + str
    this.sync(this.state.keysDown, val, e)
    this.setState({value: val})
    document.getElementById('textarea').focus()
  }

  keyPressed = (letter, type, e) => {
    if (type) {
      if (type === 'backspace' && this.state.value.length() > 0) {
        this.sync(this.state.keysDown, this.state.value.slice(0, -1), e)
      } else if (type === 'tab') {
        this.append(this.state.suggestions[0][0])(e)
      }
    } else {
      this.sync(this.state.keysDown, this.state.value + letter, e)
    }
    document.getElementById('textarea').focus()
  }

  render() {
    return (
      <div className="App">
        <div className="inner">
          <Input
            inputRef={ref => this.ref = ref}
            callback={this.sync}
            onChange={e => this.setState({value: e.target.value})}
            value={this.state.value}
            />
          <Suggestions
            suggestions={this.state.suggestions}
            title="suggestions"
            onSelect={this.append}
            />
          <Keyboard
            keysDown={this.state.keysDown}
            onKeyPress={this.keyPressed}
            />
        </div>
      </div>
    );
  }
}

export default App;
