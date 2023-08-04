import { useHttp } from './http.hook';

export const useWeatherService = () => {
  const { loading, error, clearError, request, setLoading } = useHttp();

  const _apiWeatherBase = 'https://api.openweathermap.org/data/2.5/';
  const _apiGeoBase = 'https://api.openweathermap.org/geo/1.0/';
  const _apiKey = process.env.REACT_APP_API_KEY;

  const _getPosition = () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        function success({ coords }) {
          const { latitude, longitude } = coords;
          resolve({ latitude, longitude });
        }

        function error_geo() {
          alert('Город по умолчанию - Москва');
          resolve({ latitude: '55.755826', longitude: '37.6173' });
        }

        navigator.geolocation.getCurrentPosition(success, error_geo);
      } else {
        alert('Город по умолчанию - Москва');
        resolve({ latitude: '55.755826', longitude: '37.6173' });
      }
    });
  };

  const getNameCity = async () => {
    try {
      const { latitude, longitude } = await _getPosition();
      const response = await fetch(
        `${_apiGeoBase}reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${_apiKey}`
      );
      if (!response.ok) {
        setLoading(false);
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      setLoading(false);
      return await data[0].name;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const getDataWeather = async (city) => {
    const data = await request(
      `${_apiWeatherBase}forecast?q=${city}&lang=ru&units=metric&appid=${_apiKey}`
    );
    const resArr = [];
    resArr.push(data.list[0]);
    data.list.slice(1).forEach((item) => {
      if (item.dt_txt.slice(-8) === '12:00:00') {
        resArr.push(item);
      }
    });
    return _transformDataWeather(resArr, data.city.name);
  };

  const _getWindOrientation = (deg) => {
    switch (true) {
      case deg === 0:
        return 'северный';
      case deg > 0 && deg < 90:
        return 'северо-восточный';
      case deg === 90:
        return 'восточный';
      case deg > 90 && deg < 180:
        return 'юго-восточный';
      case deg === 180:
        return 'южный';
      case deg > 180 && deg < 270:
        return 'юго-западный';
      case deg === 270:
        return 'западный';
      case deg > 270 && deg < 360:
        return 'северо-западный';
      default:
        return 'ветер';
    }
  };

  const _getDayAndMonth = (textDate) => {
    if (!textDate) {
      return '';
    }
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentYear = new Date(Date.now()).getFullYear();
    const date = new Date(textDate)
      .toLocaleDateString('ru-RU', options)
      .replace(`${currentYear} г.`, '')
      .split(',');
    let day = date[0].trim().toLowerCase();
    const fullDay = day[0].toUpperCase() + day.slice(1);
    const month = date[1].trim();

    switch (day) {
      case 'понедельник':
        day = 'Пн';
        break;
      case 'вторник':
        day = 'Вт';
        break;
      case 'среда':
        day = 'Ср';
        break;
      case 'четверг':
        day = 'Чт';
        break;
      case 'пятница':
        day = 'Пт';
        break;
      case 'суббота':
        day = 'Сб';
        break;
      case 'воскресенье':
        day = 'Вс';
        break;
      default:
        day = '';
        break;
    }

    return {
      day,
      month,
      fullDay,
    };
  };

  const _transformDataWeather = (data, city) => {
    const arrayData = [];
    let currentWeatherObj = {};
    data.forEach((item, i) => {
      const obj = {};
      obj.temp = Math.round(item.main.temp) || '?';
      obj.feelsLike = Math.round(item.main.feels_like) || '?';
      obj.city = city || '?';
      obj.humidity = item.main.humidity || '?';
      obj.description = item.weather[0].description || '?';
      obj.windSpeed = Math.round(item.wind.speed) || '?';
      obj.windOrientation = _getWindOrientation(item.wind.deg);
      obj.day = _getDayAndMonth(item.dt_txt).day;
      obj.fullDay = _getDayAndMonth(item.dt_txt).fullDay;
      obj.month = _getDayAndMonth(item.dt_txt).month;
      obj.iconId = item.weather[0].icon || '';
      obj.time = item.dt_txt.slice(-8, -3);
      if (i === 0) {
        currentWeatherObj = { ...obj };
      } else {
        arrayData.push(obj);
      }
    });

    return {
      arrayData,
      currentWeatherObj,
    };
  };

  return {
    loading,
    error,
    clearError,
    getDataWeather,
    getNameCity,
  };
};
