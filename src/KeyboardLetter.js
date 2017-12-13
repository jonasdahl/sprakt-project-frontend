import React, { Component } from 'react';
import './KeyboardLetter.css';

class KeyboardLetter extends Component {
  constructor() {
    super()
    this.state = {}
  }

  click() {
    if (this.props.type) {
      this.props.onKeyPress(this.props.letter, this.props.type)
    } else {
      this.props.onKeyPress(this.props.keysDown.includes(20) ? this.props.letter : this.props.letter.toLowerCase())
    }
  }

  render() {
    let code = 0, type = 'letter'
    if (this.props.letter) {
      code = this.props.letter.charCodeAt(0)
      switch (code) {
        case 'Å'.charCodeAt(0):
          code = 219
          break;
        case 'Ä'.charCodeAt(0):
          code = 222
          break;
        case 'Ö'.charCodeAt(0):
          code = 186
          break;
      }
    } else if (this.props.code) {
      code = this.props.code
    }

    if (this.props.type) {
      type = this.props.type
    }
    return (
      <div className={ this.props.keysDown.includes(code) ? 'key ' + type + ' active' : 'key ' + type } onClick={this.click.bind(this)}>
        { this.props.text ? this.props.text : this.props.keysDown.includes(20) ? this.props.letter : this.props.letter.toLowerCase() }
      </div>
    );
  }
}

export default KeyboardLetter;
