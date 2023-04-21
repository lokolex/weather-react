import IconComponent from "../iconComponent/IconComponent";
import styles from "./currentDayInfo.module.css";

const CurrentDayInfoItem = ({ iconId, title, text }) => {
  return (
    <div className={styles.item}>
      <div className={styles.wrapperItem}>
        <div className={styles.icon}>
          <IconComponent id={iconId} />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CurrentDayInfoItem;
