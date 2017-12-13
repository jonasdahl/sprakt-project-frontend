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
    console.log('key down', e.keyCode)
    const keysDown = [e.keyCode, ...this.state.keysDown]
    this.setState({ keysDown })
    if (this.props.callback) {
      this.props.callback(keysDown, e.target.value, e)
    }
  }

  keyUp(e) {
    const keysDown = this.state.keysDown.filter(i => i !== e.keyCode)
    this.setState({ keysDown })
    if (this.props.callback) {
      this.props.callback(keysDown, e.target.value, e)
    }
  }

  keyUpAll(e) {
    this.setState({ keysDown: [] })
    if (this.props.callback) {
      this.props.callback([], e.target.value, e)
    }
  }

  render() {
    return (
      <div className="input">
        <input type="text"
          value={this.props.value}
          ref={this.props.inputRef}
          onChange={this.props.onChange ? this.props.onChange : {}}
          onKeyDown={this.keyDown.bind(this)}
          onKeyUp={this.keyUp.bind(this)}
          onBlur={this.keyUpAll.bind(this)}
        />
        <div className="clear"></div>
      </div>
    );
  }
}

export default Input;
