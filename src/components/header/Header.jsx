import Select from "react-select";
import { useEffect, useState } from "react";

import IconComponent from "../iconComponent/IconComponent";
import styles from "./header.module.css";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  document.body.setAttribute("data-theme", theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const options = [
    { value: "light", label: "Светлая" },
    { value: "dark", label: "Темная" },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme === "light" ? "rgba(71, 147, 255, 0.2)" : theme === "dark" ? "#4F4F4F" : "gray",
      width: "150px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme === "light" ? "black" : theme === "dark" ? "white" : "gray",
    }),
    menuList: (styles) => ({
      ...styles,
      backgroundColor:
        theme === "light" ? "rgba(71, 147, 255, 0.2)" : theme === "dark" ? "#4F4F4F" : "gray",
      color: theme === "light" ? "black" : theme === "dark" ? "white" : "gray",
    }),
  };

  const changeTheme = (selectedOption) => {
    setTheme(selectedOption.value);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <IconComponent id="logo" />
          </div>
          <h1 className={styles.title}>React weather</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.themeIcon}>
            <IconComponent id="theme-icon" />
          </div>
          <Select
            styles={colourStyles}
            options={options}
            onChange={changeTheme}
            defaultValue={options.filter((obj) => obj.value === theme)}
            isSearchable={false}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
