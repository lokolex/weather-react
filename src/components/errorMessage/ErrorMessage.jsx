import img from "./error.gif";
import styles from "./errorMessage.module.css";

const ErrorMessage = ({ text }) => {
  return (
    <div className={styles.errorBlock}>
      <div className={styles.errorImg}>
        <img src={img} alt="error" />
      </div>
      <div className={styles.errorText}>{text}</div>
    </div>
  );
};

export default ErrorMessage;
