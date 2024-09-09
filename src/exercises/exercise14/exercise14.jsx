import Title from "../../components/exercise_title/title";
import ProfileCard from "./components/profileCard";
import styles from "./styles.module.css";

function Exercise14() {
  return (
    <>
      <Title number={14} title={"Props Opcionais"} />

      <h3>Perfis de Usuário</h3>
      <ProfileCard name="João" age={30} />
      <ProfileCard name="Maria" />
    </>
  );
}

export default Exercise14;
