import IconComponent from "../iconComponent/IconComponent";
import styles from "./cardOfDay.module.css";

const CardOfDay = ({ day, month, iconId, temp, description, showPopup, dayIndex }) => {
  return (
    <div onClick={() => showPopup(dayIndex)} className={styles.card}>
      <div className={styles.dayName}>{day}</div>
      <div className={styles.date}>{month}</div>
      <div className={styles.icon}>
        <IconComponent id={iconId} />
      </div>
      <div className={styles.temp}>{temp}°</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default CardOfDay;
