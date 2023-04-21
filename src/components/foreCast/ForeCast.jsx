import CardOfDay from "../cardOfDay/CardOfDay";
import styles from "./foreCast.module.css";

const ForeCast = ({ showPopup, dataForecast }) => {
  return (
    <div className={styles.wrapper}>
      {dataForecast.map((day, i) => (
        <CardOfDay
          dayIndex={i}
          showPopup={showPopup}
          key={day.fullDay}
          day={day.day}
          description={day.description}
          iconId={day.iconId}
          month={day.month}
          temp={day.temp}
        />
      ))}
    </div>
  );
};

export default ForeCast;
