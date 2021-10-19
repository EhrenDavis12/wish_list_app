// import Home from "../views/Home";

export default [
    {
        path: '/',
        name: 'app_groups',
        view: 'AppGroups',
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/login',
        name: 'login',
        view: 'Login',
        meta: {
            requiresLogin: false
        }
    },
    {
        path: '/logout',
        name: 'logout',
        view: 'Logout',
        meta: {
            requiresLogin: true
        }
    }
]