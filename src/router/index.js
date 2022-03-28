import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/opiniones",
    name: "opiniones",
    component: () =>
      import(/* webpackChunkName: "opiniones" */ "../views/OpinionesView.vue"),
  },
  {
    path: "/administracion",
    name: "administracion",
    component: () =>
      import(
        /* webpackChunkName: "administracion" */ "../views/AdministracionView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
