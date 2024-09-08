import Title from "../../components/exercise_title/title";
import Counter from "./components/counter/counter";
import styles from "./styles.module.css";

function Exercise04() {
  return (
    <>
      <Title number={4} title={"Utilizando Estado em Componentes Filhos"} />
      <div>
        <Counter />
      </div>
    </>
  );
}

export default Exercise04;
