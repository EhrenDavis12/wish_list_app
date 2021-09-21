import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import paths from "./paths";
// import store from "../store";

Vue.use(VueRouter)

export const publicPages = [
    "home",
    "about",
    "login"
]

function route({path, view, name, alias, redirect, children}){
  return {
    name: name || view,
    path,
    component: resolve => import(`@/views/${view}.vue`).then(resolve),
    alias,
    redirect,
    children
  }
}

// router.beforeEach((to, from, next) => {
  // const authRequired = !publicPages.includes(to.name);
  // const loggedIn = store.getters["auth/isLoggedIn"];

  // if (authRequired && !loggedIn){
  //   return next("/login");
  // }
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...paths.map(path => route(path))]
})

export default router
