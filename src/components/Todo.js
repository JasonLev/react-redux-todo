import React from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={
      completed ? {
        textDecoration: 'line-through',
        color: 'grey'
      } : undefined
    }
  >
    {text}
  </li>
)

export default Todo
