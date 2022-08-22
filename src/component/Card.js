import React from "react";
// import { LayoutContext } from "../context/layoutContext";
import { useContext } from "react";

import CardImage from "./CardImage";
import CardName from "./CardName";
import Toggle from "./Toggle";
import { LayoutContextNew } from "../context/layoutContextNew";

const Card = () => {
  const state = useContext(LayoutContextNew);
  // console.log(state);
  const { nightmode, day, night } = state;

  const mode = nightmode ? night : day;
  return (
    <div style={{ backgroundColor: mode.background }}>
      <CardName />
      <CardImage />
      <Toggle />
    </div>
  );
};

export default Card;
