import { useState } from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
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
        <ChecklistIcon
          color="success"
          fontSize="medium"
          cursor="pointer"
          onClick={() => props.onTaskCompleted(props.taskIndex)}
        />
        <EditIcon
          fontSize="medium"
          cursor="pointer"
          onClick={() => toggleEditing(props.taskIndex, props.tasks)}
        />
        <DeleteForeverIcon
          color="error"
          fontSize="medium"
          cursor="pointer"
          onClick={() => props.onTaskDelete(props.taskIndex)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
