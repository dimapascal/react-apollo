import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../Pages/Home';
import LoginPage from '../Pages/Login';

const history = createBrowserHistory();

export const DefaultRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={LoginPage} />
        </Switch>
    </Router>
);
