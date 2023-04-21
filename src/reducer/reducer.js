export const initialState = {
  currentDay: null,
  dataForecast: null,
  isPopup: false,
  city: "",
  dayId: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setCity":
      return { ...state, city: action.payload };
    case "setCurrentDay":
      return { ...state, currentDay: action.payload };
    case "setDataForecast":
      return { ...state, dataForecast: action.payload };
    case "setIsPopup":
      return { ...state, isPopup: action.payload };
    case "setDayId":
      return { ...state, dayId: action.payload };
    default:
      return state;
  }
};
