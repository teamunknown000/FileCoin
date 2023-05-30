import { ShoppingCart, Search, Person } from "@mui/icons-material";
import styles from "./style.module.scss";
import Link from "next/link";
import { Box, Button, Typography, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
declare var window: any;

type Anchor = "right";

const Header = () => {
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
    </Box>
  );

  // const connectWalletHandler = async () => {
  //   if (window.ethereum) {
  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     window.ethereum.on("chainChanged", () => {
  //       window.location.reload();
  //     });
  //     window.ethereum.on("accountsChanged", () => {
  //       window.location.reload();
  //     });
  //     let accountAddress = accounts[0];
  //     console.log(accountAddress);
  //   } else {
  //     alert("Please Install Metamask");
  //   }
  // };
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
        <Button sx={{ color: "inherit" }}>Connect Wallet</Button>
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
