import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { SiteMap } from './SiteMap';
import { PrivateRoute } from './PrivateRoute';
import { Default404Page } from '../Pages/404/Default404';

const history = createBrowserHistory();
const { home, login, user, register } = SiteMap;

export const DefaultRouter = () => (
    <Router history={history}>
        <Switch>
            <Route {...home} exact />
            <Route {...login} />
            <Route {...register} />
            <PrivateRoute {...user} exact />
            <Route component={Default404Page} />
        </Switch>
    </Router>
);
