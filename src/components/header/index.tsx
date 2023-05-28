import { Search, ShoppingCart, Person } from "~/utils/mui";
import "./style.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="main">
        <div className="left">Logo</div>
        <div className="center">
          <div>Home</div>
          <div>Products</div>
          <div>Categories</div>
          <div>About</div>
        </div>
        <div className="right">
          <Search fontSize="large" />
          <ShoppingCart fontSize="large" />
          <Person fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
