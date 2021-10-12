import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../page/Home";
import Project from "../page/Project";
import NavBar from "../nav/NavBar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
