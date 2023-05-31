import { GitHub, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import styles from "./style.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["left"]}>
          <div className={styles["title"]}>
            <img
              alt="Website Logo"
              src="/banner.svg"
              height="130px"
              width="300px"
            ></img>
          </div>
          <div className={styles["logos"]}>
            <div>
              <Instagram />
            </div>
            <Link
              href="https://github.com/teamunknown000/FileCoin"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GitHub />
            </Link>
            <div>
              <Twitter />
            </div>
            <div>
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className={styles["center-left"]}>
          <div className={styles["title"]}>Pages</div>
          <div className={styles["pages"]}>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
              href="/"
              className={styles["page"]}
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
              href="/about-us"
              className={styles["page"]}
            >
              About Us
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
              href="/products"
              className={styles["page"]}
            >
              Products
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
              href="/categories"
              className={styles["page"]}
            >
              Categories
            </Link>
          </div>
        </div>
        <div className={styles["center-right"]}>
          <div className={styles["title"]}>Other Links</div>
          <div className={styles["links"]}>
            <div className={styles["link"]}>Sell your Items</div>
            <div className={styles["link"]}>Privacy Policy</div>
            <div className={styles["link"]}>Terms and Condition</div>
            <div className={styles["link"]}>Return and Exchange Policy</div>
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["title"]}>Contact Us</div>
          <div className={styles["contacts"]}>
            <div className={styles["contact"]}>Mobile No.</div>
            <div className={styles["contact"]}>Email</div>
            <div className={styles["contact"]}>Address</div>
          </div>
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div>
          @2023 Copyright <strong>ShopSync</strong>
        </div>
        <div>
          Designed and developed by <strong>Abhishek Bhagat</strong> and{" "}
          <strong>Sreevallabh Karanam</strong>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
