import { ShoppingCart, Search, Person } from "@mui/icons-material";
import styles from "./style.module.scss";
import Link from "next/link";
import { Box, Button, Typography, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import CartCard from "../cart-card";
import { useMetaMask } from "~/context/context";
declare var window: any;

type Anchor = "right";

const Header = () => {
  const {
    accountAddr,
    chainId,
    provider,
    contract,
    setContract,
    setAccountAddr,
    setChainId,
    setProvider,
  } = useMetaMask();
  console.log(`${accountAddr} ${chainId} ${setProvider} ${setContract}`);

  const demoCartProd = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Colorful sneakers",
      price: "$19.99",
      quantity: 2,
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Sport sneakers",
      price: "$21.99",
      quantity: 1,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "iWatch",
      price: "$99.99",
      quantity: 3,
    },
  ];
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{ paddingTop: "1rem" }} variant="h3">
          Cart Overview
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        {demoCartProd.map((product, i) => (
          <CartCard product={product} key={i} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "1rem",
        }}
      >
        <Button>Buy</Button>
      </div>
    </Box>
  );

  return (
    <div className={styles["header-container"]}>
      <div className={styles["main"]}>
        <div className={styles["left"]}>
          <img src="/logo.png" height="70px" width="70px"></img>
        </div>
        <div className={styles["center"]}>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
            href="/"
          >
            <div>Home</div>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
            href="/products"
          >
            <div>Products</div>
          </Link>
          <Link
            href="/categories"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>Categories</div>
          </Link>
          <Link
            href="/about-us"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>About</div>
          </Link>
        </div>
        <div className={styles["right"]}>
          <div
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Search fontSize="large" />
          </div>
          <div
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={toggleDrawer("right", true)}
          >
            <ShoppingCart fontSize="large" />
          </div>
          <Link
            href="/profile"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Person fontSize="large" />
          </Link>
        </div>
      </div>
      <div className={styles["wallet-btn"]}>
        <Button sx={{ color: "inherit", fontSize: "large", height: "100%" }}>
          {accountAddr
            ? accountAddr.slice(0, 5) + "..." + accountAddr.slice(38, 43)
            : "Connect Wallet"}
        </Button>
      </div>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
};

export default Header;
