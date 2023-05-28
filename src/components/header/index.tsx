import {
  ShoppingCart,
  Search,
  Person
} from "@mui/icons-material"
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["main"]}>
        <div className={styles["left"]}>Logo</div>
        <div className={styles["center"]}>
          <div>Home</div>
          <div>Products</div>
          <div>Categories</div>
          <div>About</div>
        </div>
        <div className={styles["right"]}>
          <Search fontSize="large" />
          <ShoppingCart fontSize="large" />
          <Person fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
