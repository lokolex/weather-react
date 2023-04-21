import LogoIcon from "./img/logo.svg";
import ErrorIcon from "./img/error.svg";
import ThemeIcon from "./img/theme-icon.svg";
import SunIcon from "./img/sun.svg";
import TempIcon from "./img/temp-icon.svg";
import HumidityIcon from "./img/humidity-icon.svg";
import DescriptionIcon from "./img/description-icon.svg";
import WindIcon from "./img/wind-icon.svg";
import CloudImg from "./img/cloudImg.svg";
import FewCloudDayIcon from "./img/few-clouds-day.svg";
import CloudyIcon from "./img/cloudy.svg";
import RainIcon from "./img/rain.svg";
import RainAndSun from "./img/rain-and-sun.svg";
import ThunderstormDay from "./img/thunderstorm-day.svg";
import SnowIcon from "./img/snow.svg";
import MistIcon from "./img/mist.svg";

const IconComponent = ({ id }) => {
  switch (id) {
    case "logo":
      return <img src={LogoIcon} alt="logo" />;
    case "theme-icon":
      return <img src={ThemeIcon} alt="theme" />;
    case "temp-icon":
      return <img src={TempIcon} alt="temp" />;
    case "humidity-icon":
      return <img src={HumidityIcon} alt="humidity" />;
    case "description-icon":
      return <img src={DescriptionIcon} alt="description" />;
    case "wind-icon":
      return <img src={WindIcon} alt="wind" />;
    case "cloud-img":
      return <img src={CloudImg} alt="cloud" />;
    case "01d":
      return <img src={SunIcon} alt="Sun" />;
    case "01n":
      return <img src={SunIcon} alt="Moon" />;
    case "02d":
      return <img src={FewCloudDayIcon} alt="Few cloud day" />;
    case "02n":
      return <img src={FewCloudDayIcon} alt="Few cloud night" />;
    case "03d":
      return <img src={FewCloudDayIcon} alt="cloudy" />;
    case "03n":
      return <img src={FewCloudDayIcon} alt="cloudy" />;
    case "04d":
      return <img src={CloudyIcon} alt="cloudy" />;
    case "04n":
      return <img src={CloudyIcon} alt="cloudy" />;
    case "09d":
      return <img src={RainIcon} alt="rain" />;
    case "09n":
      return <img src={RainIcon} alt="rain" />;
    case "10d":
      return <img src={RainAndSun} alt="rain and sun" />;
    case "10n":
      return <img src={RainAndSun} alt="rain and moon" />;
    case "11d":
      return <img src={ThunderstormDay} alt="Thunderstorm day" />;
    case "11n":
      return <img src={ThunderstormDay} alt="Thunderstorm night" />;
    case "13d":
      return <img src={SnowIcon} alt="Snow" />;
    case "13n":
      return <img src={SnowIcon} alt="Snow" />;
    case "50d":
      return <img src={MistIcon} alt="Mist" />;
    case "50n":
      return <img src={MistIcon} alt="Mist" />;

    default:
      return <img src={ErrorIcon} alt="error" />;
  }
};

export default IconComponent;
