import { React } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.svg";
const NavBar = () => {
  return (
    <>
      <section className="my_nav">
        <div className="row">
          <div className="col-2">
            <NavLink exact to="/">
              <img className="logo" src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="col-10">
            <div className=" float-end">
              <ul className=" d-flex">
                <li>
                  <NavLink exact className=" my_btn2" to="/">
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact className=" my_btn" to="/project">
                    project 👋
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NavBar;
