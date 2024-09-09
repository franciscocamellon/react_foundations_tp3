import { useEffect, useState } from "react";
import Title from "../../components/exercise_title/title";
import TodoList from "./components/todo/todoList";
import styles from "./styles.module.css";

const initialTaskList = [
  {
    description: "Comprar mantimentos para a semana",
    isCompleted: false,
  },
  { description: "Terminar o projeto em React", isCompleted: false },
  {
    description: "Chamar o encanador para consertar o vazamento",
    isCompleted: false,
  },
  { description: "Agendar uma reunião com a equipe", isCompleted: false },
  { description: "Fazer uma corrida de 30 minutos", isCompleted: false },
];

function Exercise10() {
  const [taskList, setTaskList] = useState([]);
  const [description, setDescription] = useState("");

  function toggleComplete(taskId) {
    const filteredTask = [...taskList];

    filteredTask[taskId].isCompleted = true;

    setTaskList(filteredTask);
  }

  function saveTask(event) {
    event.preventDefault();

    setTaskList([...taskList, { description, isCompleted: false }]);

    setDescription("");
  }

  const handleTaskDelete = (taskId) => {
    const remainingTasks = taskList.filter((task, index) => taskId !== index);
    setTaskList(remainingTasks);
  };

  useEffect(() => {
    setTaskList(initialTaskList);
  }, []);

  return (
    <>
      <Title number={10} title={"Lidando com Eventos Personalizados"} />

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

      <TodoList
        taskList={taskList}
        onTaskCompleted={toggleComplete}
        onTaskDelete={handleTaskDelete}
      />
    </>
  );
}

export default Exercise10;
