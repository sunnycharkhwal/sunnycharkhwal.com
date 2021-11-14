import React from "react";
import MyImg from "../PageComponent/MyImg";
const Cards = (props) => {
  return (
    <>
      <div className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
        <div className="info_card">
          <div className=" text-center">
            <MyImg className="tel_img" backgroundImage={props.imgsrc} />
            <h5>{props.title}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
