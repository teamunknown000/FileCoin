import styles from "./style.module.scss";

export default function Spinner() {
    return (
        <div className="spinner">
            <div className={styles["container"]}>
                <div className={styles["main"]}></div>
            </div>
        </div>
    )
}