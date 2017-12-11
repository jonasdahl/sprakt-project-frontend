import React, { Component } from 'react';
import './Suggestion.css';

class Suggestion extends Component {
  constructor() {
  	super()
  }

  render() {
    return (
      <div className="suggestion" onClick={this.props.onSelect ? this.props.onSelect : {}}>
        { this.props.value }
      </div>
    );
  }
}

export default Suggestion;
