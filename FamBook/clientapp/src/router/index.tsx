import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import * as createHistory from "history";
//import Home from "../components/Home";
import Feed from "../components/Feed";
import MasterPage from "../Layout/MasterPage";

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
export const history = createHistory.createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={MasterPage} />
            </Switch>
        </div>
          
    </Router>
);

export default AppRouter;