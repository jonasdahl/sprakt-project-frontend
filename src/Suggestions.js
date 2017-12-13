import React, { Component } from 'react';
import './Suggestions.css';
import Suggestion from './Suggestion.js'

class Suggestions extends Component {
  constructor() {
  	super()
  }

  render() {
    return (
      <div className="suggestions">
        {
        	this.props.suggestions && this.props.suggestions.length > 0 ?
          this.props.suggestions.map(s => (
        		<Suggestion key={s[0]} value={s[0]} onSelect={this.props.onSelect ? e => this.props.onSelect(s[0], e) : {}} />
        	))
          : 'No ' + this.props.title + ' available'
        }
        <div className="clear"></div>
      </div>
    );
  }
}

export default Suggestions;
