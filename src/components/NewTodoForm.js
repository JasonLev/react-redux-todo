import React from 'react'
import { connect } from 'react-redux'
import { addTodo, setVisibilityFilter, VisibilityFilters } from '../actions/todoActions'

const NewTodoForm = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      let batchTodos = input.value.split(',')
      batchTodos.forEach(todo => dispatch(addTodo(todo.trim())))
      dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
      input.value = ''
    }}>
      <input ref={node => input = node} />
      <button type="submit">
        Add
      </button>
    </form>
  )
}

export default connect()(NewTodoForm)
