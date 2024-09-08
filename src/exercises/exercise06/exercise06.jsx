import Title from "../../components/exercise_title/title";
import TodoList from "./components/todo/todoList";
import styles from "./styles.module.css";

function Exercise06() {
  return (
    <>
      <Title number={6} title={"Componentização Avançada"} />

      <TodoList />
    </>
  );
}

export default Exercise06;
