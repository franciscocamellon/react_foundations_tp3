import Title from "../../components/exercise_title/title";
import Counter from "./components/counter/counter";
import styles from "./styles.module.css";

function Exercise05() {
  return (
    <>
      <Title number={5} title={"Manipulando o Estado com Funções"} />
      <div>
        <Counter />
      </div>
    </>
  );
}

export default Exercise05;
