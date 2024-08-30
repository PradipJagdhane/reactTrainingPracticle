import React, { useState } from "react";
import { ThemContext } from "./createContext";

function ProviderContext() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemContext.Provider value={theme}>
      <Toolbar />
    </ThemContext.Provider>
  );
}

export default ProviderContext;
