import React from "react";
import MyImg from "../../PageComponent/MyImg";
const Cards = (props) => {
  return (
    <>
      <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <a
          href={props.links}
          target="_blank"
          rel="noreferrer"
          className="project_section_div_link"
        >
          <div className="project_section_div shadow">
            <div className=" text-center">
              <div className="project_section_img_div">
                <MyImg
                  className="project_section_img"
                  backgroundImage={props.imgsrc}
                />
              </div>
              <div className="project_section_h3_div">
                <h3>{props.title}</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default Cards;
