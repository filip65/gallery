import React, { useState, useContext } from "react";

const HeaderContext = React.createContext();

const HeaderProvider = ({ children }) => {
  const [headerBg, setHeaderBg] = useState("");

  const changeHeaderBg = (value) => {
    if (value === undefined) {
      setHeaderBg("##d4d4d4");
      return;
    }

    if (value[0] === "#") {
      setHeaderBg(value);
    } else {
      setHeaderBg(`url(${value})`);
    }
  };

  return (
    <HeaderContext.Provider value={{ headerBg, changeHeaderBg }}>
      {children}
    </HeaderContext.Provider>
  );
};

const useGetHeaderBg = () => {
  return useContext(HeaderContext);
};

export { HeaderProvider, useGetHeaderBg };
