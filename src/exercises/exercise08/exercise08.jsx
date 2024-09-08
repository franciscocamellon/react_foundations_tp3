import Title from "../../components/exercise_title/title";
import TodoList from "./components/todo/todoList";
import styles from "./styles.module.css";

function Exercise08() {
  return (
    <>
      <Title number={8} title={"Lidando com Múltiplos Estados"} />
      <TodoList />
    </>
  );
}

export default Exercise08;
