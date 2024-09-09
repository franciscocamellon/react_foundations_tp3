import { useEffect, useState } from "react";
import Title from "../../components/exercise_title/title";
import TodoList from "./components/todo/todoList";
import styles from "./styles.module.css";

const initialTaskList = [
  {
    description: "Comprar mantimentos para a semana",
    isCompleted: false,
    isEditing: false,
  },
  {
    description: "Terminar o projeto em React",
    isCompleted: false,
    isEditing: false,
  },
  {
    description: "Chamar o encanador para consertar o vazamento",
    isCompleted: false,
    isEditing: false,
  },
  {
    description: "Agendar uma reunião com a equipe",
    isCompleted: false,
    isEditing: false,
  },
  {
    description: "Fazer uma corrida de 30 minutos",
    isCompleted: false,
    isEditing: false,
  },
];

function Exercise11() {
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

  function updatingTask(event, task) {
    event.preventDefault();
    const updatedTask = [...taskList];

    updatedTask[task.id].description = task.description;
    updatedTask[task.id].isCompleted = task.isCompleted;

    setTaskList(updatedTask);
  }

  useEffect(() => {
    setTaskList(initialTaskList);
  }, []);

  return (
    <>
      <Title number={11} title={"Renderização Condicional"} />
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
        onTaskEditing={updatingTask}
        onTaskDelete={handleTaskDelete}
      />
    </>
  );
}

export default Exercise11;
