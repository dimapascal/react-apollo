import HomePage from '../Pages/Home';
import LoginPage from '../Pages/Login';
import MePage from '../Pages/Me';
import RegisterPage from '../Pages/Register';

type SiteMapItem = {
    path: string;
    name: string;
    title: string;
    parent?: string;
    component?: React.ComponentType | React.ComponentType<any>;
    private?: boolean;
};

export const SiteMap = {
    home: {
        path: '/',
        name: 'home',
        title: 'Home',
        component: HomePage
    } as SiteMapItem,
    login: {
        path: '/login',
        name: 'login',
        title: 'Login',
        component: LoginPage
    } as SiteMapItem,
    register: {
        path: '/register',
        name: 'register',
        title: 'Register',
        component: RegisterPage
    } as SiteMapItem,
    user: {
        path: '/user',
        name: 'user',
        title: 'Me',
        component: MePage,
        private: true
    } as SiteMapItem,
    logout: {
        path: '/',
        name: 'logout',
        title: 'Logout',
        private: true
    } as SiteMapItem
};
