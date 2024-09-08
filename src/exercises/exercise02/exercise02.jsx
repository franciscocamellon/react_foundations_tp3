import Title from "../../components/exercise_title/title";
import Counter from "./components/counter/counter";
import styles from "./styles.module.css";

function Exercise02() {
  return (
    <>
      <Title number={2} title={"Ajustando o Estado Inicial"} />
      <div>
        <Counter />
      </div>
    </>
  );
}

export default Exercise02;
