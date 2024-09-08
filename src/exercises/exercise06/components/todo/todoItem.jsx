import styles from "./styles.module.css";

function TodoItem(props) {
  return (
    <div key={props.index} className={styles.item_card}>
      {props.taskDescription}
    </div>
  );
}

export default TodoItem;
