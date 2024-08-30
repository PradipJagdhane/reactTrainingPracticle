import React, { useContext } from "react";
import ThemContext from "./createContext";

function ThemeButton() {
  const theme = useContext(ThemContext);

  return (
    <button
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      I am styled by theme context
    </button>
  );
}

export default ThemeButton;
