import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import SignUp from "../components/Signup";
import Store from "../store/store";
import NotFoundPage from "../components/NotFoundPage";
import createHistory from "history/createBrowserHistory";
import ReactPlayer from 'react-player';

export const history = createHistory();

const AppRouter = () => (
  <div>
    <div className="musicPlayer">
      <ReactPlayer url='https://soundcloud.com/sickickofficial/mindgames' playing loop/>
    </div>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/store" component={Store} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default AppRouter;
