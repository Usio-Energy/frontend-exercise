import React, { Component } from 'react';

export default class Item extends Component {
  constructor() {
    super();

    this.onRemove = this.onRemove.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onRemove() {
    this.props.onRemove(this.props.id);
  }

  onStatusChange({ target: { checked } }) {
    this.props.onStatusChange(this.props.id, checked);
  }

  render() {
    return (
      <li>
        <input type="checkbox" onChange={ this.onStatusChange }/> {this.props.value}
        &nbsp; - &nbsp;
        <button id="remove-btn" onClick={ this.onRemove }>Remove</button>
      </li>
    );
  }
}