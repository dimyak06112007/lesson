import React from 'react'

import TodoListItem from './TodoListItem'

export default function TodoList(props) {

  const items = props.items.map((item) => {
    return (
      
      <TodoListItem
        item = {this.props.handler}
      />
    )
  })

  return (
    <ul> {items} </ul>
  )
}
