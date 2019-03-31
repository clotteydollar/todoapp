import React, { Component } from 'react';
import Todos from './components/todos'
import AddTodo from './components/AddForm'

class App extends Component {
  state ={
    todos:[
        {id:1, content:"buy some milk"},
        {id:2, content:"Go to shoprite"}
    ],
    checked:false
  }

  deleteTodo =(id) => { 
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })

    this.setState({
      todos:todos
    })
  }
  addTodo =(todo)=>{
    todo.id =Math.random()
    let todos =[...this.state.todos, todo]
    this.setState({
      todos     
    })
  }
  handleChecked =(e) =>{
    this.setState({
      checked:!this.state.checked
    })

  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo}/>
         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} handleChecked={this.handleChecked}/>
         
      </div>
    );
  }
}

export default App;
