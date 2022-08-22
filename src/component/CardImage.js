import React, { useContext } from "react";
import { mainContext } from "../context/mainContext";

const CardImage = () => {
  const context = useContext(mainContext);
  console.log("context", context);
  return (
    <div>
      <img src={context.data.avatar} alt="img" />
    </div>
  );
};

export default CardImage;
