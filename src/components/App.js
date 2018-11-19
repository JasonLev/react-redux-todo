import React, { Component } from 'react';
import '../App.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo App</h1>
        </header>
        <NewTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
