import { useEffect, useState } from "react";
import MyCard from "../my-card";
import styles from "./style.module.scss";
import Carousel from "react-material-ui-carousel";

const ProductCarousel = () => {
  const items = [
    "Prod No 1",
    "Prod No 2",
    "Prod No 3",
    "Prod No 4",
    "Prod No 5",
    "Prod No 6",
    "Prod No 7",
  ];
  let k = 0;
  let displayProducts = [];
  for (let i = 0; i < Math.ceil(items.length / 4); i++) {
    const tempArr = [];
    let end = k + 4;
    if (end > items.length) {
      end = items.length;
    }
    let l = k;
    for (l = k; l < end; l++) {
      tempArr.push(items[l]);
    }
    k = end;
    displayProducts.push(
      <div key={i}>
        {tempArr.map((prod, j) => (
          <MyCard key={j} cardNo={prod} />
        ))}
      </div>
    );
  }
  return <Carousel>{displayProducts}</Carousel>;
};

export default ProductCarousel;
