import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ProfileCard(props) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h4">
          Nome: {props.name}
        </Typography>
        <Typography variant="body2">
          <p>Idade: {props.age || "Idade não disponível"}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
