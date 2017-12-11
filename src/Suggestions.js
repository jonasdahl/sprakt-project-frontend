import React, { Component } from 'react';
import './Suggestions.css';
import Suggestion from './Suggestion.js'

class Suggestions extends Component {
  constructor() {
  	super()
  	this.state = {
  		suggestions: ['test', 'testa']
  	}
  }

  render() {
    return (
      <div className="suggestions">
        {
        	this.state.suggestions.map(s => (
        		<Suggestion value={s} />
        	))
        }
        <div className="clear"></div>
      </div>
    );
  }
}

export default Suggestions;
