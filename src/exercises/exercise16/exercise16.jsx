import Title from "../../components/exercise_title/title";
import StatusBadge from "./components/statusBadge";
import styles from "./styles.module.css";

function Exercise16() {
  return (
    <>
      <Title number={16} title={"Estilo Condicional"} />

      <h3>Status dos Usuários:</h3>
      <StatusBadge status="ativo" />
      <StatusBadge status="inativo" />
      <StatusBadge status="pendente" />
    </>
  );
}

export default Exercise16;
