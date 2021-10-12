import React from "react";
import Title_Img from "../../img/top_user.svg";
import Hero from "../../img/hero.svg";
const Home = () => {
  return (
    <>
      <section className="container">
        <div>
          <div className="top_title">
            <div className="top_title_text">
              <div className=" text-center">
                <h1>Front-end & React js Developer</h1>
                <h3>
                  I design and code beautifully simple things, and I love what I
                  do.
                </h3>
              </div>
              <div>
                <div
                  className="top_title_img"
                  style={{
                    backgroundImage: `url(${Title_Img})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="hero_img"
              style={{
                backgroundImage: `url(${Hero})`,
              }}
            ></div>
          </div>
        </div>
      </section>
      <section>
        <div className="banner">
          <div>
            <div className=" text-center">
              <h1>Hi, I’m Sunny. Nice to meet you.</h1>
            </div>
            <div className="text-center">
              <p>
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
