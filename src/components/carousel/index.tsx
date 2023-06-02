import type { Schema } from "mongoose";
import MuiCarousel from "react-material-ui-carousel";
import IProduct from "~/types/product";

interface ProductProps {
  url: string;
}

const Product = (props: ProductProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
      >
        <img
          style={{
            borderBottomRightRadius: "6rem",
            borderBottomLeftRadius: "6rem",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px"
          }}
          src={props.url}
          alt="home page image"
          height={"60%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};

interface Props {
  productData: IProduct[];
}

export default function Carousel({ productData }: Props) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <MuiCarousel>
        {productData.map((item, i) => (
          <Product url={item.images[item.thumbImage]} key={i} />
        ))}
      </MuiCarousel>
    </div>
  );
}
