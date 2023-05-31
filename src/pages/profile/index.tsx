import { Typography } from "@mui/material";
import styles from "./style.module.scss";

const Profile = () => {
  return (
    <div className={styles["profile-page"]}>
      <div className={styles["profile-title"]}>
        <Typography sx={{ fontSize: "100px" }}>Dashboard</Typography>
        <Typography variant="h5">Home &gt;&gt; Profile</Typography>
      </div>
      <div className={styles["profile-description"]}>
        <div className={styles["details"]}>
          <div className={styles["detail"]}>
            <div className={styles["inner-box"]}>Abhishek Bhagat</div>
            <div className={styles["inner-box"]}>abhishekb740@gmail.com</div>
          </div>
          <div className={styles["detail"]}>
            <div className={styles["inner-box"]}>7798984956</div>
            <div className={styles["inner-box"]}>Premium Plan</div>
          </div>
          <div className={styles["detail"]}>
            <div className={styles["inner-box"]}>
              Default Address Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nemo nam, neque non aliquam at labore incidunt.
              Nulla totam ad minus neque amet debitis?
            </div>
            <div className={styles["inner-box"]}>Wallet Address</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
