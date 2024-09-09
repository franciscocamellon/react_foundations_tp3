import Title from "../../components/exercise_title/title";
import Temperature from "./components/temperature";
import styles from "./styles.module.css";

function Exercise13() {
  const currentTemp = 28;

  return (
    <>
      <Title
        number={13}
        title={"Renderização Condicional com Operador Ternário"}
      />

      <h3>Verifique a temperatura:</h3>
      <Temperature temp={currentTemp} />
    </>
  );
}

export default Exercise13;
