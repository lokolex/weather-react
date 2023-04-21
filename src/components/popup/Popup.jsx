import CurrentDayInfoItem from "../currentDayInfo/CurrentDayInfoItem";
import IconComponent from "../iconComponent/IconComponent";
import styles from "./popup.module.css";

const Popup = ({ hidePopup, dataDay }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        <div className={styles.dayWrapper}>
          <div className={styles.temp}>{dataDay.temp}°</div>
          <div className={styles.dayName}>{dataDay.fullDay}</div>
          <div className={styles.img}>
            <IconComponent id={dataDay.iconId} />
          </div>
          <div className={styles.time}>Время: {dataDay.time}</div>
          <div className={styles.city}>Город: {dataDay.city}</div>
        </div>
        <div className={styles.dayInfoWrapper}>
          <CurrentDayInfoItem
            iconId="temp-icon"
            title="Температура"
            text={`${dataDay.temp}° - ощущается как ${dataDay.feelsLike}°`}
          />
          <CurrentDayInfoItem
            iconId="humidity-icon"
            title="Влажность"
            text={`${dataDay.humidity}%`}
          />
          <CurrentDayInfoItem
            iconId="description-icon"
            title="Описание"
            text={`${dataDay.description}`}
          />
          <CurrentDayInfoItem
            iconId="wind-icon"
            title="Ветер"
            text={`${dataDay.windSpeed}м/с ${dataDay.windOrientation}`}
          />
        </div>
        <div onClick={hidePopup} className={styles.close}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_20)">
              <path
                d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z"
                fill="#4793FF"
              />
              <path
                d="M10.0605 8.99997L11.7803 7.28022C12.0731 6.98734 12.0731 6.51259 11.7803 6.21972C11.4874 5.92684 11.0126 5.92684 10.7198 6.21972L9.00003 7.93947L7.28028 6.21972C6.98778 5.92684 6.51228 5.92684 6.21978 6.21972C5.9269 6.51259 5.9269 6.98734 6.21978 7.28022L7.93953 8.99997L6.21978 10.7197C5.9269 11.0126 5.9269 11.4873 6.21978 11.7802C6.36603 11.9268 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9268 7.28028 11.7802L9.00003 10.0605L10.7198 11.7802C10.8664 11.9268 11.058 12 11.25 12C11.442 12 11.6336 11.9268 11.7803 11.7802C12.0731 11.4873 12.0731 11.0126 11.7803 10.7197L10.0605 8.99997Z"
                fill="#4793FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_20">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Popup;
