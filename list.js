import React, { Component } from 'react';

export default class list extends Component {
  render() {
    return (
      <div className="list">
        { this.props.children }
      </div>
    )
  }
}
