import React from 'react'

export default function TodoListItem(props) {

  return (
    <li>
      <div>
        <span></span>
        {props.item.value}
      </div>
    </li>
  )
}
