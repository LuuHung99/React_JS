import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./Todolist/index";
import TodoForm from "../TodoForm/todoForm";

TodoFeature.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

function TodoFeature() {
  const initTodoList = [
    {
      id: 1,
      title: "Hung",
      status: "new",
    },

    {
      id: 2,
      title: "New",
      status: "complete",
    },

    {
      id: 3,
      title: "Update",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [showTodoList, setShowTodoList] = useState("all");

  const handleTodoClick = (todo, idex) => {
    console.log(todo, idex);
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idex],
      status: newTodoList[idex].status === "new" ? "complete" : "new",
    };

    newTodoList[idex] = newTodo;

    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    setShowTodoList("all");
  };

  const handleShowCompleted = () => {
    setShowTodoList("complete");
  };

  const handleShowNew = () => {
    setShowTodoList("new");
  };

  const renderStatus = todoList.filter(
    (todo) => showTodoList === "all" || showTodoList === todo.status
  );

  function handleTodoFormSubmit(formValue) {
    console.log('value', formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  // console.log(renderStatus);

  return (
    <div>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todoList={renderStatus} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCompleted}>Show complete</button>
      <button onClick={handleShowNew}>Show New</button>
    </div>
  );
}

export default TodoFeature;
