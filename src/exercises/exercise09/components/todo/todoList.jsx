import React, { useState } from "react";
import TodoItem from "./todoItem";
import styles from "./styles.module.css";

function TodoList(props) {
  return (
    <>
      <h4>Lista de tarefas</h4>

      <div className={styles.list_container}>
        {props.taskList.map((task, index) => (
          <TodoItem taskDescription={task} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
