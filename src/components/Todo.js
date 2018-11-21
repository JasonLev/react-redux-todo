import React from 'react'

const Todo = ({ onClick, completed, text, id }) => (
  <li>
    <input type="checkbox"
           onChange={onClick}
           checked={completed}
           id={"checkbox" + id} />
    <label htmlFor={"checkbox" + id}
           style={
             completed ? {
               textDecoration: 'line-through',
               color: 'grey'
             } : undefined
           }
    >
      {text}
    </label>
  </li>
)

export default Todo
