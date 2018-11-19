import React, { Component } from 'react';
import '../App.css';
import NewTodoForm from '../containers/NewTodoForm';
// import TodoList from '../containers/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo App</h1>
        </header>
        <NewTodoForm />
        {/*<TodoList />*/}
      </div>
    );
  }
}

export default App;
