import { NavLink } from "react-router-dom";
import login_img from "../../../../img/QrCode.jpg";
import login_icon from "../../../../img/QrCode.png";
import login_img2 from "../../../../img/qr-code.png";
import BgImg from "../../../page_component/BgImg";
import { Box } from "@material-ui/core";
import LoginTopTitle, { LoginBtn } from "../../../page_component/LoginTopTitle";

import Btn from "../../../navbar/Btn";

const QrCode = () => {
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
                    <LoginTopTitle title="Qr Code" />
                  </div>
                </Box>
                <Box className="text-center">
                  <BgImg Myclass="login_icon2" loginImg={login_img2} />
                </Box>
                <Box component="div" className="text-center mt-2">
                  <LoginBtn btnTitle="New Qr Code" />
                </Box>
                <Box component="div" className="mt-3 text-capitalize">
                  <div className="row">
                    <div className="col-6">
                      <Btn
                        link="/log_in"
                        btnName="log in"
                        component={NavLink}
                        color="inherit"
                        variant="text"
                      />
                    </div>
                    <div className="col-6">
                      <div className=" float-right">
                        <Btn
                          link="/sign_up"
                          btnName="sign up"
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

export default QrCode;
