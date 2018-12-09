import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, VisibilityFilters } from '../actions/todoActions'
import TodoList from '../components/TodoList'

const getVisibleList = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.filter(todo => !todo.deleted)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed && !todo.deleted)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed && !todo.deleted)
    case VisibilityFilters.SHOW_DELETED:
      return todos.filter(todo => todo.deleted)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleList(state.todos, state.visibilityFilter),
  display: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
