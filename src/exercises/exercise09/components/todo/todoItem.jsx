import { useState } from "react";
import styles from "./styles.module.css";

function TodoItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleComplete() {
    setIsCompleted(true);
  }

  return (
    <div key={props.index} className={styles.item_card}>
      <span className={isCompleted ? styles.completed : ""}>
        {props.taskDescription}
      </span>
      <button onClick={handleComplete}>Concluir</button>
    </div>
  );
}

export default TodoItem;
