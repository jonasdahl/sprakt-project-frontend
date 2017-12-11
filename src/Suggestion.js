import React, { Component } from 'react';
import './Suggestion.css';

class Suggestion extends Component {
  constructor() {
  	super()
  }

  render() {
    return (
      <div className="suggestion">
        { this.props.value }
      </div>
    );
  }
}

export default Suggestion;
