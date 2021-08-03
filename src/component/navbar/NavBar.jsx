import TemporaryDrawer from "./mobile/SideNav";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import NavBtn from "./NavBtn";

const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Sunny
          </Typography>
          <div className=" d-none d-xxl-block d-xl-block d-lg-block">
            <NavBtn />
          </div>
          <div className=" d-block d-xxl-none d-xl-none d-lg-none ">
            <IconButton color="inherit">
              <TemporaryDrawer />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
