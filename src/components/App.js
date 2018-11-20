import React, { Component } from 'react';
import '../App.css';
import NewTodoForm from './NewTodoForm';
import VisibleList from '../containers/VisibleList';
import DisplayFilter from './DisplayFilter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo App</h1>
        </header>
        <DisplayFilter />
        <NewTodoForm />
        <VisibleList />
      </div>
    );
  }
}

export default App;
