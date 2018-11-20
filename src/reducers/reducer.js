import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibleFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
