import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";
const CardApp = (props) => {
  return (
    <>
      <div className="row mb-5">
        {CardData.map((val, ind) => (
          <Cards key={ind} imgsrc={val.imgsrc} title={val.title} />
        ))}
      </div>
    </>
  );
};
export default CardApp;
