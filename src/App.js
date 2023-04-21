import { CSSTransition } from "react-transition-group";
import { useEffect, useReducer } from "react";
import { useWeatherService } from "./hooks/weatherService.hook";
import { initialState, reducer } from "./reducer/reducer";
import Container from "./components/container/Container";
import CurrentDayWrapper from "./components/currentDayWrapper/CurrentDayWrapper";
import Header from "./components/header/Header";
import SearchInput from "./components/searchInput/SearchInput";
import ForeCast from "./components/foreCast/ForeCast";
import Popup from "./components/popup/Popup";
import Spinner from "./components/spinner/Spinner";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import "./app.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { getNameCity, loading, error, clearError, getDataWeather } = useWeatherService();

  useEffect(() => {
    getNameCity()
      .then((city) => dispatch({ type: "setCity", payload: city }))
      .catch((err) => console.log(err.message));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!state.city) return;
    updateDataDays();

    // eslint-disable-next-line
  }, [state.city]);

  const onCurrentDayLoaded = (data) => {
    dispatch({ type: "setCurrentDay", payload: data });
  };

  const onForecastLoaded = (data) => {
    dispatch({ type: "setDataForecast", payload: data });
  };

  const updateDataDays = () => {
    if (!state.city) {
      return;
    }
    clearError();
    getDataWeather(state.city)
      .then((data) => {
        onCurrentDayLoaded(data.currentWeatherObj);
        onForecastLoaded(data.arrayData);
      })
      .catch((error) => console.log(error.message));
  };

  const changeCityName = (value) => {
    dispatch({ type: "setCity", payload: value.trim() });
  };

  const showPopup = (id) => {
    dispatch({ type: "setIsPopup", payload: true });
    dispatch({ type: "setDayId", payload: id });
  };

  const hidePopup = () => {
    dispatch({ type: "setIsPopup", payload: false });
  };

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage text={error} /> : null;
  const content = !(loading || error || !state.currentDay || !state.dataForecast) ? (
    <>
      <CurrentDayWrapper currentDay={state.currentDay} />
      <ForeCast dataForecast={state.dataForecast} showPopup={showPopup} />
      <CSSTransition unmountOnExit mountOnEnter in={state.isPopup} timeout={400} classNames="fade">
        <Popup dataDay={state.dataForecast[state.dayId]} hidePopup={hidePopup} />
      </CSSTransition>
    </>
  ) : null;

  return (
    <Container>
      <Header />
      <SearchInput changeCityName={changeCityName} />
      {spinner}
      {errorMessage}
      {content}
    </Container>
  );
};

export default App;
