import styles from "./styles.module.css";

function Greeting(props) {
  return (
    <>
      <div className={styles.greeting_card}>Olá, {props.name}!</div>
    </>
  );
}

export default Greeting;
