import { Typography } from "@mui/material";
import styles from "./style.module.scss";
import { useMetaMask } from "~/context/context";

const Profile = () => {
  const { accountAddr } = useMetaMask();
  return (
    <div className={styles["profile-page"]}>
      <div className={styles["profile-title"]}>
        <Typography sx={{ fontSize: "100px" }}>Dashboard</Typography>
        <Typography variant="h5">Profile</Typography>
      </div>
      <div className={styles["profile-description"]}>
        <div className={styles["details"]}>
          <div className={styles["detail"]}>
            <div className={styles["user-detail"]}>
              <label>Name</label>
              <div className={styles["inner-box"]}>Abhishek Bhagat</div>
            </div>
            <div className={styles["user-detail"]}>
              <label>Email</label>
              <div className={styles["inner-box"]}>abhishekb740@gmail.com</div>
            </div>
          </div>
          <div className={styles["detail"]}>
            <div className={styles["user-detail"]}>
              <label>Phone No</label>
              <div className={styles["inner-box"]}>7798984956</div>
            </div>
            <div className={styles["user-detail"]}>
              <label>Plan</label>
              <div className={styles["inner-box"]}>Premium Plan</div>
            </div>
          </div>
          <div className={styles["detail"]}>
            <div className={styles["user-detail"]}>
              <label>Default Address</label>
              <div className={styles["inner-box"]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                nam, neque non aliquam at labore incidunt. Nulla totam ad minus
                neque amet debitis?
              </div>
            </div>
            <div className={styles["user-detail"]}>
              <label>Wallet Address</label>
              <div className={styles["inner-box"]}>
                {accountAddr.slice(0, 5) + "..." + accountAddr.slice(38, 43)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
