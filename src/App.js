import React, { Component } from "react";
import Todos from "./components/todos";
import AddTodo from "./components/AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "Go to shoprite" }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
      complete: false
    });
  };

  isComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            content: todo.content,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          handleChecked={this.handleChecked}
          isComplete={this.isComplete}
        />
      </div>
    );
  }
}

export default App;
