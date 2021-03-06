import React from 'react'

const Todo = ({ onClick,
                completed,
                deleted,
                text,
                id,
                onDelete }) => (
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
    {!deleted && <button className="delete" onClick={onDelete}>X</button>}
  </li>
)

export default Todo
