import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";
const CardApp = (props) => {
  return (
    <>
      <div className="row mb-5 g-3">
        {CardData.map((val, ind) => {
          return (
            <Cards
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              links={val.links}
            />
          );
        })}
      </div>
    </>
  );
};
export default CardApp;
