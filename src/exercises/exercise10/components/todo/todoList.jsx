import React, { useState } from "react";
import TodoItem from "./todoItem";
import styles from "./styles.module.css";

function TodoList(props) {
  return (
    <>
      <h4>Lista de tarefas</h4>

      <div className={styles.list_container}>
        {props.taskList.map((task, index) => (
          <TodoItem
            taskIndex={index}
            tasks={task}
            isCompleted={props.isCompleted}
            onTaskCompleted={props.onTaskCompleted}
            onTaskDelete={props.onTaskDelete}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
