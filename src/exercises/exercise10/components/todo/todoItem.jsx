import ChecklistIcon from "@mui/icons-material/Checklist";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import styles from "./styles.module.css";

function TodoItem(props) {
  return (
    <div key={props.taskIndex} className={styles.item_card}>
      <span className={props.tasks.isCompleted ? styles.completed : ""}>
        {props.tasks.description}
      </span>
      <div className={styles.button_container}>
        <ChecklistIcon
          color="success"
          fontSize="medium"
          cursor="pointer"
          onClick={() => props.onTaskCompleted(props.taskIndex)}
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
