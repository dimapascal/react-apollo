import { Route, RouteProps } from 'react-router-dom';
import { useMeQuery } from '../graphql/generators';
import { Auth404Page } from '../Pages/404/Auth404';

export const PrivateRoute = (props: RouteProps) => {
    const { loading, data } = useMeQuery();

    if (!data?.me || loading) {
        return <Auth404Page />;
    } else {
        return <Route {...props} />;
    }
};
