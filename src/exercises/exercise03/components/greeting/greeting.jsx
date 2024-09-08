import styles from "./styles.module.css";

function Greeting(props) {
  return (
    <>
      <div className={styles.greeting_card}>
        Olá, {props.name}! Você tem {props.age} anos.
      </div>
    </>
  );
}

export default Greeting;
