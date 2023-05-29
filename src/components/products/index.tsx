import Image from "next/image";
import styles from "./style.module.scss";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Product = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{}}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography>{props.price}</Typography>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
