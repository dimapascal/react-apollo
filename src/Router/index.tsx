import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import HomePage from "../Page/Home";

const history = createBrowserHistory();

export const DefaultRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" strict component={HomePage} />
    </Switch>
  </Router>
);
