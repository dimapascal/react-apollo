import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../Pages/Home';

const history = createBrowserHistory();

export const DefaultRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" strict component={HomePage} />
            <Route path="/about" strict component={HomePage} />
        </Switch>
    </Router>
);
