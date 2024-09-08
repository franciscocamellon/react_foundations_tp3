import { useState } from "react";
import styles from "./styles.module.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  function count() {
    setCounter(counter + 1);
  }

  return (
    <div className={styles.counter_container}>
      <div>Contador: {counter}</div>
      <div className={styles.button_container}>
        <button onClick={count}>Count</button>
      </div>
    </div>
  );
}

export default Counter;
