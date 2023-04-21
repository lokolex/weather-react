import CurrentDayInfoItem from "./CurrentDayInfoItem";
import IconComponent from "../iconComponent/IconComponent";
import styles from "./currentDayInfo.module.css";

const CurrentDayInfo = ({
  temp,
  feelsLike,
  humidity,
  description,
  windSpeed,
  windOrientation,
  isImage,
}) => {
  return (
    <div className={styles.wrapper}>
      <CurrentDayInfoItem
        iconId="temp-icon"
        title="Температура"
        text={`${temp}° - ощущается как ${feelsLike}°`}
      />
      <CurrentDayInfoItem iconId="humidity-icon" title="Влажность" text={`${humidity}%`} />
      <CurrentDayInfoItem iconId="description-icon" title="Описание" text={`${description}`} />
      <CurrentDayInfoItem
        iconId="wind-icon"
        title="Ветер"
        text={`${windSpeed}м/с ${windOrientation}`}
      />

      {isImage && (
        <div className={styles.img}>
          <IconComponent id="cloud-img" />
        </div>
      )}
    </div>
  );
};

export default CurrentDayInfo;
