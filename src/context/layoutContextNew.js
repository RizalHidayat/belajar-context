import React, { createContext, useState } from "react";

export const LayoutContextNew = createContext();

const LayoutContextNewProvider = (props) => {
  const [state, setState] = useState({
    nightmode: false,
    day: {
      color: "#000",
      background: "red",
    },
    night: {
      color: "#ffff",
      background: "#000",
    },
  });

  //   console.log("state", state);

  const handleToggle = () => {
    setState({ ...state, nightmode: !state.nightmode });
  };

  return (
    <LayoutContextNew.Provider value={{ ...state, handleToggle: handleToggle }}>
      {props.children}
    </LayoutContextNew.Provider>
  );
};

export default LayoutContextNewProvider;
