import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Product(props) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h4">
          Produto: {props.name}
        </Typography>
        <Typography variant="body2">
          <p>Preço: R$ {props.price.toFixed(2)}</p>
          <p>Descrição: {props.description || "Descrição não disponível"}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Product;
