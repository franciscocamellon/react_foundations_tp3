import { useState } from "react";
import DisplayCount from "./displayCount";
import styles from "./styles.module.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  function count() {
    setCounter(counter + 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div className={styles.counter_container}>
      <DisplayCount counter={counter} />
      <div className={styles.button_container}>
        <button onClick={count}>Count</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
