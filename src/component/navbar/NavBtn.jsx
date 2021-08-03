import Btn from "./Btn";
import { NavLink } from "react-router-dom";
const NavBtn = () => {
  return (
    <>
      <Btn
        link="/"
        btnName="Home"
        component={NavLink}
        color="inherit"
        variant="text"
      />
      <Btn
        link="/demo"
        btnName="demo"
        component={NavLink}
        color="inherit"
        variant="text"
      />
    </>
  );
};
export default NavBtn;
