import Title from "../../components/exercise_title/title";
import Greeting from "./components/greeting/greeting";
import styles from "./styles.module.css";

function Exercise01() {
  return (
    <>
      <Title number={1} title={"Props"} />
      <div className={styles.greetings_container}>
        <Greeting name={"João"} />
        <Greeting name={"Manoel"} />
        <Greeting name={"Maria"} />
      </div>
    </>
  );
}

export default Exercise01;
