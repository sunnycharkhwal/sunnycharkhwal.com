import { NavLink } from "react-router-dom";
import login_img from "../../../../img/login2.jpg";
import login_icon from "../../../../img/login_icon2.png";
import BgImg from "../../../page_component/BgImg";
import { Box } from "@material-ui/core";
import MyTextField from "../../../page_component/MyTextField";
import LoginTopTitle, { LoginBtn } from "../../../page_component/LoginTopTitle";

import Btn from "../../../navbar/Btn";

const SignUp = () => {
  return (
    <>
      <div className="bg">
        <div className="clild_div shadow">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 d-none d-xxl-block d-xl-block">
              <div className="login_img_div">
                <BgImg Myclass="login_img" loginImg={login_img} />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12">
              <div className=" p-xxl-5 p-xl-5 pl-lg-5 p-md-5 p-3">
                <Box className="text-center">
                  <BgImg Myclass="login_icon" loginImg={login_icon} />
                </Box>
                <Box className="text-center">
                  <div className="mt-4 mb-4 login_title">
                    <LoginTopTitle title="sign up" />
                  </div>
                </Box>
                <Box component="form">
                  <MyTextField label="Email Id" type="email" />
                  <MyTextField label="Password" type="password" />
                  <MyTextField label="Phone Number" type="number" />
                  <Box component="div" className="text-center mt-2">
                    <LoginBtn btnTitle="sign up" />
                  </Box>
                </Box>
                <Box component="div" className="mt-3 text-capitalize">
                  <div className="row">
                    <div className="col-6">
                      <Btn
                        link="/forgot_password"
                        btnName="forgot password"
                        component={NavLink}
                        color="inherit"
                        variant="text"
                      />
                    </div>
                    <div className="col-6">
                      <div className=" float-right">
                        <Btn
                          link="/log_in"
                          btnName="log in"
                          component={NavLink}
                          color="inherit"
                          variant="text"
                        />
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
