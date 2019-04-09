import React from "react";

const Todos = ({ todos, deleteTodo, isComplete }) => {
  const completeHandler = () => {
    isComplete(todos.id);
  };
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div
          style={{ textDecoration: todos.complete ? "line-through" : "" }}
          onClick={completeHandler}
          className="collection-item"
          key={todo.id}
        >
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos left</p>
  );
  return <div className="todos collection">{todoList}</div>;
};
export default Todos;
