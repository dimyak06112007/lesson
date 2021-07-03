import React from 'react'

import TodoListItem from './TodoListItem'

export default function TodoList(props) {

  const items = props.items.map((item, index) => {
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
