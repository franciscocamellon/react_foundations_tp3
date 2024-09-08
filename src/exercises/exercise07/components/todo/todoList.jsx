import React, { useState } from "react";
import TodoItem from "./todoItem";
import styles from "./styles.module.css";

const taskList = [
  "Comprar mantimentos para a semana",
  "Terminar o projeto em React",
  "Chamar o encanador para consertar o vazamento",
  "Agendar uma reunião com a equipe",
  "Fazer uma corrida de 30 minutos",
];

function TodoList() {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleComplete() {
    setIsCompleted(true);
  }

  return (
    <>
      <h4>Lista de tarefas</h4>
      <div className={styles.list_container}>
        {taskList.map((task, index) => (
          <TodoItem taskDescription={task} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
