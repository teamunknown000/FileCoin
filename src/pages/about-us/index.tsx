import { Typography } from "@mui/material";
import styles from "./style.module.scss";

const AboutUs = () => {
  return (
    <div className={styles["about-us-page"]}>
      <div className={styles["about-us-title"]}>
        <Typography sx={{ fontSize: "100px" }}>About Us</Typography>
      </div>
      <div className={styles["about-us-description"]}>
        <div className={styles["left"]}>
          <Typography variant="h2">About ShopSync:</Typography>
        </div>
        <div className={styles["right"]}>
          <Typography variant="h6">
            Welcome to ShopSync, your ultimate destination for buying and
            selling products securely and efficiently. We are a cutting-edge
            online marketplace that leverages the power of blockchain technology
            and the reliability of Filecoin Blockchain for transaction storage,
            ensuring transparency and immutability.
          </Typography>
          <Typography variant="h6">
            At ShopSync, we believe in revolutionizing the way people engage in
            e-commerce. Our platform utilizes the decentralized nature of
            blockchain to provide a secure and trustworthy environment for all
            your buying and selling needs. By leveraging the robustness of
            Filecoin Blockchain, we ensure that all transactional data is stored
            securely, allowing for seamless audits and enhancing trust between
            buyers and sellers.
          </Typography>
          <Typography variant="h6">
            We understand the importance of a user-friendly experience, and
            that's why we have chosen MongoDB as our primary database for
            product and user listing. MongoDB's flexible and scalable
            architecture enables us to provide a seamless browsing and searching
            experience to our users. Whether you're looking for the latest
            gadgets, fashion accessories, or household items, ShopSync's vast
            collection of products is just a few clicks away.
          </Typography>
        </div>
        <div className={styles["bottom"]}>
          <Typography variant="h6">
            Join the ShopSync community today and experience the future of
            online commerce. Discover unique products, connect with reliable
            sellers, and enjoy a seamless and secure shopping experience.
            ShopSync is your go-to destination for all your buying and selling
            needs, powered by the robustness of Filecoin Blockchain and the
            convenience of MongoDB.
          </Typography>
          <Typography variant="h6">
            Embrace the power of blockchain technology and unlock endless
            possibilities with ShopSync.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
