import IconComponent from "../iconComponent/IconComponent";
import styles from "./currentDay.module.css";

const CurrentDay = ({ temp, city, iconId, time }) => {
  return (
    <div className={styles.currentDay}>
      <div className={styles.temp}>{temp}°</div>
      <div className={styles.today}>Сегодня</div>
      <div className={styles.time}>{time}</div>
      <div className={styles.city}>{city}</div>
      <div className={styles.img}>
        <IconComponent id={iconId} />
      </div>
    </div>
  );
};

export default CurrentDay;
