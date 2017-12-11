import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor() {
    super()
    this.state = {
      keysDown: []
    }
  }

  keyDown(e) {
    const l = this.state.keysDown
    l.push(e.keyCode)
    this.setState({
      keysDown: l,
    })
    if (this.props.callback) {
      this.props.callback(this.state.keysDown, e.target.value)
    }
  }

  keyUp(e) {
    console.log(e.target.value)
    const l = this.state.keysDown
    let idx = l.indexOf(e.keyCode)
    while (idx > -1) {
      l.splice(idx, 1)
      idx = l.indexOf(e.keyCode)
    }
    this.setState({
      keysDown: l,
    })
    if (this.props.callback) {
      this.props.callback(this.state.keysDown, e.target.value)
    }
  }

  keyUpAll(e) {
    this.setState({
      keysDown: [],
    })
    if (this.props.callback) {
      this.props.callback(this.state.keysDown, e.target.value)
    }
  }

  render() {
    return (
      <div className="input">
        <input type="text" value={this.props.value} onChange={this.props.onChange ? this.props.onChange : {}} onKeyDown={this.keyDown.bind(this)} onKeyUp={this.keyUp.bind(this)} onBlur={this.keyUpAll.bind(this)} />
        <div className="clear"></div>
      </div>
    );
  }
}

export default Input;
