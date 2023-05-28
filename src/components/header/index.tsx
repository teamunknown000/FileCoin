import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.scss?inline";
import { Search, ShoppingCart, Person } from "~/utils/mui";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="header-container">
      <div class="main">
        <div class="left">
          Logo
        </div>
        <div class="center">
          <div>Home</div>
          <div>Products</div>
          <div>Categories</div>
          <div>About</div>
        </div>
        <div class="right">
            <Search fontSize="large"/>
            <ShoppingCart fontSize="large"/>
            <Person fontSize="large"/>
        </div>
      </div>
    </div>
  );
});