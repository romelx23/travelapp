import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Home } from "../Components/Screens/Home/Home";
import { Search } from "../Components/Screens/Search/Search";
import { Tours } from "../Components/Screens/Tours/Tours";

export const DashboardRoutes = () => {
  return (
    <>
      <Router>
        <div className="">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/tours" component={Tours}/>
          <Redirect exact path="/" component={Home}/>
        </Switch>
        </div>
      </Router>
    </>
  );
};
