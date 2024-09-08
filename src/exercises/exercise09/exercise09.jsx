import { useState } from "react";
import Title from "../../components/exercise_title/title";
import TodoList from "./components/todo/todoList";
import styles from "./styles.module.css";

const initialTaskList = [
  "Comprar mantimentos para a semana",
  "Terminar o projeto em React",
  "Chamar o encanador para consertar o vazamento",
  "Agendar uma reunião com a equipe",
  "Fazer uma corrida de 30 minutos",
];

function Exercise09() {
  const [taskList, setTaskList] = useState(initialTaskList);
  const [description, setDescription] = useState("");

  function saveTask(event) {
    event.preventDefault();

    setTaskList([...taskList, description]);

    setDescription("");
  }

  return (
    <>
      <Title number={9} title={"Elevando o Estado"} />

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

      <TodoList taskList={taskList} />
    </>
  );
}

export default Exercise09;
