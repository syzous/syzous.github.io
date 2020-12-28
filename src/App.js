import React from "react";
import Home from "./Page/Home.js";
import SignIn from "./Page/SignIn.js";
import SignUp from "./Page/SignUp.js";
import Report from "./Page/Report.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrimarySearchAppBar from "./MyComponent/AppBar.js";
function App() {
  return (
    <React.Fragment>
      <Router>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
