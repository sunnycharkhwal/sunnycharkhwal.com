// import NavBar from "../navbar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../home_page/Home/Home";
import SignUp from "../home_page/data/form/SignUp";
import Login from "../home_page/data/form/Login";
import ForgotPassword from "../home_page/data/form/ForgotPassword";
import Demo from "../home_page/Demo";
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/log_in" component={Login} />
          <Route exact path="/forgot_password" component={ForgotPassword} />
          <Route exact path="/demo" component={Demo} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
