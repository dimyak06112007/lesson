import React, { Component } from 'react'

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoItems: ['first todo', 'second todo'],
    }
  }

  updateList() {
    
  }

  render() {
    return (
      <div>
        <TodoList items={this.props.todoItems}/>
        <TodoForm/>
      </div>
    )
  }
}
