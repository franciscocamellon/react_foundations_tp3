import Title from "../../components/exercise_title/title";
import List from "./components/list";
import styles from "./styles.module.css";

function Exercise12() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <Title
        number={12}
        title={"Renderização Condicional com Elementos em Lista"}
      />

      <List numbers={numbers} />
    </>
  );
}

export default Exercise12;
