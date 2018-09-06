import React, { Component } from 'react';

import Item from './Item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItemField: '',
      items: [
        {
          id: 1,
          value: 'Item 1',
          isComplete: false
        },
        {
          id: 2,
          value: 'Item 2',
          isComplete: false
        },
        {
          id: 3,
          value: 'Item 3',
          isComplete: false
        }
      ]
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onInputChange({ target: { value: newItemValue } }) {
    this.setState({
      newItemField: newItemValue
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      newItemField: '',
      items: [
        ...this.state.items,
        {
          id: this.state.items.length + 1,
          value: this.state.newItemField,
          isComplete: false,
        }
      ]
    })
  }

  onRemove(itemId) {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  getCompletedCount() {
    return this.state.items.filter(item => item.isComplete).length;
  }

  onStatusChange(itemId, isComplete) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            isComplete: isComplete
          };
        } else {
          return item;
        }
      })
    });
  }

  render() {
    return (
      <div>
        <h1>To do app</h1>

        <form onSubmit={ this.onSubmit }>
          <input id="add-input" type="text" value={ this.state.newItemField } onChange={ this.onInputChange } />

          <input type="submit" id="add-btn" value="Add" />
        </form>

        <div className="status">{ this.getCompletedCount() } out of { this.state.items.length } tasks completed</div>

        <ul>
          {this.state.items.map(item => (
            <Item onStatusChange={ this.onStatusChange } key={ item.value } { ...item } onRemove={ this.onRemove } />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;