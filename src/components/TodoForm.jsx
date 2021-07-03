import React, { Component } from 'react'
import TodoList from './TodoList';
export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.addItem  =this.addItem.bind(this)
    this.handler = this.handler.bind(this)  }

  addItem (event) {
    event.preventDefault()
    console.log("in addItem")
    alert('send name ' + this.input.current.value)
  }
  handler() {
    this.setState(
      {todo: this.input.current.value}
      )
  }

  render() {
    return (
      <div>
        <input ref={this.input} type="text" placeholder="Enter your task" name="inputToDo" />
        <button type="submit" onClick  ={this.addItem, <TodoList {...this.handler}/> } value="Execute">Add</button>
      </div>

      
    )
  }
}
