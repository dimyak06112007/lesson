import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  addItem () {
    const newTodoItem = this.inputRef.current.value;
    this.state.push(newTodoItem);
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" placeholder="Enter your task" />
        <button type="submit" onclick="additem()">Add</button>
      </div>
    )
  }
}
