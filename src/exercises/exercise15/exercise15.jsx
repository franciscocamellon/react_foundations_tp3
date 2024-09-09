import Title from "../../components/exercise_title/title";
import Product from "./components/product";
import styles from "./styles.module.css";

function Exercise15() {
  return (
    <>
      <Title number={15} title={"Props Opcionais com Valores Padrão"} />

      <h3>Informações sobre Produtos</h3>

      <Product
        name="Notebook"
        price={3500.0}
        description="Notebook com 16GB RAM, SSD de 512GB."
      />
      <Product name="Smartphone" price={2000.0} />
    </>
  );
}

export default Exercise15;
