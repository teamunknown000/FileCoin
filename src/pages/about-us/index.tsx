import { Typography } from "@mui/material";
import styles from "./style.module.scss";

const AboutUs = () => {
  return (
    <div className={styles["about-us-page"]}>
      <div className={styles["about-us-title"]}>
        <Typography sx={{ fontSize: "100px" }}>About Us</Typography>
        <Typography variant="h5">Home &gt;&gt; About Us</Typography>
      </div>
    </div>
  );
};

export default AboutUs;
