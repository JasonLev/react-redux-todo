import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, display, deleteTodo }) => (
  <ul>
    {todos.length > 0 ? todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
      ) :
    display === "SHOW_DELETED" ? "Nothing deleted yet!" : "No todos yet."}
  </ul>
)

export default TodoList
