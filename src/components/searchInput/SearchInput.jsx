import { useState } from "react";
import styles from "./searchInput.module.css";

const SearchInput = ({ changeCityName }) => {
  const [cityName, setCityName] = useState("");

  const changeHandle = (e) => {
    setCityName(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (!cityName.trim()) return;
    changeCityName(cityName);
  };

  return (
    <div className={styles.wrapper}>
      <form action="#" onSubmit={submitHandle}>
        <input
          className={styles.input}
          type="text"
          placeholder="Город"
          value={cityName}
          onChange={changeHandle}
        />
        <button className={styles.button}>
          <svg width="40px" height="40px" fill="#444" viewBox="0 0 16 16" version="1.1">
            <path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
