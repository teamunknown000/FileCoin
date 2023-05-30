import styles from "./style.module.scss";

const MyCard = (props: any) => {
  return (
    <div className={styles["mycard"]}>
      <div>Product No: {props.cardNo} </div>
    </div>
  );
};

export default MyCard;
