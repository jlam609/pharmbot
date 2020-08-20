import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav";
import Search from "./search";
import Home from "./home";
import Recommend from "./recommend";
import Result from "./result";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>Welcome to RxPanda</h1>
        <Nav />
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/recommend" component={Recommend} />
        <Route path="/result" component={Result} />
        <Redirect to="/home" />
      </Switch>
      <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="129050512054424"
      theme_color="#fa3c4c"
      logged_in_greeting="Hi! How are you feeling today?"
      logged_out_greeting="Hi! Thank you for visiting us! Come back soon!"
    ></div>
    </div>
  );
};

export default App;
