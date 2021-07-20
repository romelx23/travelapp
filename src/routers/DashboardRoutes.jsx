import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Experience } from "../Components/Screens/Experience/Experience";
import { Home } from "../Components/Screens/Home/Home";
import { Saves } from "../Components/Screens/Saves/Saves";
import { Search } from "../Components/Screens/Search/Search";
import { Tours } from "../Components/Screens/Tours/Tours";

export const DashboardRoutes = () => {
  return (
    <>
      <Router>
        <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/tours" component={Tours}/>
          <Route exact path="/experience" component={Experience}/>
          <Route exact path="/save" component={Saves}/>
          <Route exact path="/tours" component={Tours}/>
          <Redirect exact to="/" component={Home}/>
        </Switch>
        </>
      </Router>
    </>
  );
};
