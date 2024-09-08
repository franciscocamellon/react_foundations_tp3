import Title from "../../components/exercise_title/title";
import Greeting from "./components/greeting/greeting";
import styles from "./styles.module.css";

function Exercise03() {
  return (
    <>
      <Title number={3} title={"Atualizando Props"} />
      <div className={styles.greetings_container}>
        <Greeting name={"João"} age={"15"} />
        <Greeting name={"Manoel"} age={"68"} />
        <Greeting name={"Maria"} age={"36"} />
      </div>
    </>
  );
}

export default Exercise03;
