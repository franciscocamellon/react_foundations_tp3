import { useState } from "react";
import { MdChecklist, MdDeleteForever, MdEdit } from "react-icons/md";
import styles from "./styles.module.css";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    id: -1,
    description: "",
    isCompleted: false,
  });

  function toggleEditing(index, tasks) {
    setIsEditing(true);
    setUpdatedTask({
      id: index,
      description: tasks.description,
      isCompleted: tasks.isCompleted,
    });
  }

  function submitTask(event, task) {
    props.onTaskEditing(event, task);
    setIsEditing(false);
  }

  return (
    <div key={props.taskIndex} className={styles.item_card}>
      {isEditing ? (
        <form
          className={styles.form_container}
          onSubmit={(event) => submitTask(event, updatedTask)}
        >
          <input
            className={styles.input}
            value={updatedTask.description}
            onChange={(event) =>
              setUpdatedTask({
                ...updatedTask,
                description: event.target.value,
              })
            }
          ></input>
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <span className={props.tasks.isCompleted ? styles.completed : ""}>
          {props.tasks.description}
        </span>
      )}

      <div className={styles.button_container}>
        <MdChecklist
          color="green"
          size={25}
          cursor="pointer"
          onClick={() => props.onTaskCompleted(props.taskIndex)}
        />
        <MdEdit
          size={25}
          cursor="pointer"
          onClick={() => toggleEditing(props.taskIndex, props.tasks)}
        />
        <MdDeleteForever
          color="red"
          size={25}
          cursor="pointer"
          onClick={() => props.onTaskDelete(props.taskIndex)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
