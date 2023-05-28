import {
  GitHub,
  Instagram,
  Twitter,
  LinkedIn
} from "@mui/icons-material";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["left"]}>
          <div className={styles["title"]}>ShopSync</div>
          <div className={styles["logos"]}>
            <div>
              <Instagram />
            </div>
            <div>
              <GitHub />
            </div>
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
            <div className={styles["page"]}>Home</div>
            <div className={styles["page"]}>About Us</div>
            <div className={styles["page"]}>Shop</div>
            <div className={styles["page"]}>FAQs</div>
            <div className={styles["page"]}>Contact Us</div>
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
