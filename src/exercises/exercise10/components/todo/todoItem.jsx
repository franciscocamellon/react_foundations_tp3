import { MdChecklist, MdDeleteForever } from "react-icons/md";
import styles from "./styles.module.css";

function TodoItem(props) {
  return (
    <div key={props.taskIndex} className={styles.item_card}>
      <span className={props.tasks.isCompleted ? styles.completed : ""}>
        {props.tasks.description}
      </span>
      <div className={styles.button_container}>
        <MdChecklist
          color="green"
          size={25}
          cursor="pointer"
          onClick={() => props.onTaskCompleted(props.taskIndex)}
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
