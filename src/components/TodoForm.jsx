import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.inputRef = React.createRef();
  }

  addItem(event) {
    event.preventDefault();
    // this.inputRef == input
    this.setState({todo: this.inputRef.current.value})
    this.inputRef.current.value = '';
    console.log(this.inputRef.current.value)
  }


  render() {
    return (
      <form onSubmit={this.addItem}>
        <label htmlFor="
        ">
          <input ref={this.inputRef} type="text" placeholder="Enter your task" />
        </label>
        <input type="submit" value="Add" />
      </form>
    )
  }
}
