import CurrentDay from "../currentDay/CurrentDay";
import CurrentDayInfo from "../currentDayInfo/CurrentDayInfo";
import styles from "./currentDayWrapper.module.css";

const CurrentDayWrapper = ({ currentDay }) => {
  const { temp, city, iconId, time, description, feelsLike, humidity, windOrientation, windSpeed } =
    currentDay;

  return (
    <div className={styles.wrapper}>
      <CurrentDay temp={temp} city={city} iconId={iconId} time={time} />
      <CurrentDayInfo
        description={description}
        feelsLike={feelsLike}
        humidity={humidity}
        temp={temp}
        windOrientation={windOrientation}
        windSpeed={windSpeed}
        isImage={true}
      />
    </div>
  );
};

export default CurrentDayWrapper;
