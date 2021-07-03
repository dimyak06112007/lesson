import React, { Component } from 'react'

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this)

    this.state = {
      todoItems: ['first todo', 'second todo'],
    }
  }

  updateList(list) {
    this.setState(
      () => list
    )
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.todoItems} />
        <TodoForm updateList={this.updateList} items = {this.todoItems} />

      </div>
    )
  }
}
