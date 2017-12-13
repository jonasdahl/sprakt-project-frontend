import React, { Component } from 'react';
import './Suggestions.css';

class Suggestions extends Component {
  render() {
    return <div className="suggestions">
      {
        this.props.suggestions &&
        this.props.suggestions.length > 0 ?
          this.props.suggestions.map(s =>
            <div
              key={s[0]}
              className="suggestion"
              onClick={this.props.onSelect(s[0])}>
              { s[0] }
            </div>)
        : <div>
          No { this.props.title } available
        </div>
      }
      <div className="clear"></div>
    </div>
  }
}

export default Suggestions;
