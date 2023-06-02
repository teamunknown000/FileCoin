import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// interface ProductProps {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
//   imageUrl: string;
// }

const MuiCard = (props: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.product.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="h6">{props.product.price}</Typography>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default MuiCard;
