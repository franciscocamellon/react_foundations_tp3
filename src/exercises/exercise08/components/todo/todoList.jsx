import React, { useState } from "react";
import TodoItem from "./todoItem";
import styles from "./styles.module.css";

const initialTaskList = [
  "Comprar mantimentos para a semana",
  "Terminar o projeto em React",
  "Chamar o encanador para consertar o vazamento",
  "Agendar uma reunião com a equipe",
  "Fazer uma corrida de 30 minutos",
];

function TodoList() {
  const [taskList, setTaskList] = useState(initialTaskList);
  const [description, setDescription] = useState("");

  function saveTask(event) {
    event.preventDefault();

    setTaskList([...taskList, description]);

    setDescription("");
  }

  return (
    <>
      <form
        className={styles.add_task_container}
        onSubmit={(event) => saveTask(event)}
      >
        <div className={styles.input_task}>
          <label>Adicione uma nova tarefa</label>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Tarefa"
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>

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
