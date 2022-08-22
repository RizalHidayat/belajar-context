import React, { useContext } from "react";
// import { LayoutContext } from "../context/layoutContext";
import { LayoutContextNew } from "../context/layoutContextNew";

const Toggle = () => {
  const state = useContext(LayoutContextNew);

  const { nightmode, handleToggle } = state;
  return (
    <div>
      <button onClick={handleToggle}>
        change to {nightmode ? "day" : "night"} mode
      </button>
    </div>
  );
};

export default Toggle;
