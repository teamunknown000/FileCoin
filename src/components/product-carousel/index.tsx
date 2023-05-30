import MyCard from "../my-card";
import styles from "./style.module.scss";

const ProductCarousel = () => {
  //   let box = document.querySelector(".product-container");
  //   console.log(box);

  //   const prevClickHandler = () => {
  //     let width = box.clientWidth;
  //     box.scrollLeft = box.scrollLeft - width;
  //     console.log(width);
  //   };
  //   const nextClickHandler = () => {
  //     let width = box.clientWidth;
  //     box.scrollLeft = box.scrollLeft + width;
  //     console.log(width);
  //   };
  return (
    <div className={styles["product-carousel"]}>
      <button className={styles["prev-btn"]}>
        <p>&lt;</p>
      </button>
      <button className={styles["next-btn"]}>
        <p>&gt;</p>
      </button>

      <div className={styles["product-container"]}>
        <MyCard cardNo="1" />
        <MyCard cardNo="2" />
        <MyCard cardNo="3" />
        <MyCard cardNo="4" />
        <MyCard cardNo="5" />
        <MyCard cardNo="6" />
      </div>
    </div>
  );
};

export default ProductCarousel;
