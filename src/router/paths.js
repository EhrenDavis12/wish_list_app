// import Home from "../views/Home";

export default [
    {
        path: '/',
        name: 'home',
        view: 'Home'
    },
    {
        path: '/about',
        name: 'about',
        view: 'About'
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/aboutProtected',
        name: 'aboutProtected',
        view: 'AboutProtected'
    }
]