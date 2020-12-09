import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "@/views/Shop.vue";
import Contact from "@/views/Contact.vue";
import Cart from "@/views/Cart.vue";
import Sign_in from "@/views/Sign_in.vue";
import Sign_up from "@/views/Sign_up.vue";
import Admin from "@/views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/boutique/:shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/nous_contacter",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/mon_panier",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/identifiez_vous",
    name: "Sign_in",
    component: Sign_in,
  },
  {
    path: "/inscrivez_vous",
    name: "Sign_up",
    component: Sign_up,
  },
  {
    path: "/a_propos_de_nous",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
