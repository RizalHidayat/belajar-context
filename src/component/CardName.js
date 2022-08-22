import React, { useContext } from "react";
import { mainContext } from "../context/mainContext";
// import { LayoutContext } from "../context/layoutContext";
import { LayoutContextNew } from "../context/layoutContextNew";

const CardName = () => {
  const context = useContext(mainContext);
  const state = useContext(LayoutContextNew);

  const { nightMode, day, night } = state;

  const mode = nightMode ? night : day;
  return (
    <div>
      <h1 style={{ color: mode.color }}>{context.data.name}</h1>
    </div>
  );
};

export default CardName;
