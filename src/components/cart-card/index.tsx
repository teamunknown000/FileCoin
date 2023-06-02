import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CartCard = (props: any) => {
  let updatedPrice =
    props.product.quantity *
    +props.product.price.slice(1, props.product.price.length);

  let stringPrice = "$" + updatedPrice.toFixed(2);

  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={props.product.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", gap: "15px" }}>
        <Typography variant="h6">{stringPrice}</Typography>
        <Typography variant="h6">Quantity: {props.product.quantity}</Typography>
      </CardActions>
    </Card>
  );
};

export default CartCard;
