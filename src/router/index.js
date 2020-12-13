import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "@/views/Shop.vue";
import Contact from "@/views/Contact.vue";
import Cart from "@/views/Cart.vue";
import Sign_in from "@/views/Sign_in.vue";
import Sign_up from "@/views/Sign_up.vue";
import Admin from "@/views/Admin.vue";
import User from "@/views/User.vue";
import Categories from "@/views/Categories.vue";
import Products from "@/views/Products.vue";
import Users from "@/views/Users.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/boutique/:shop",
    name: "Shop",
    component: Shop,
    props: true,
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
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter(to, from, next) {
      if (store.state.authenticated !== true && store.state.profil.admin !== 1) {
        next("/identifiez_vous");
      } else {
        next();
      }
    },
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
    beforeEnter(to, from, next) {
      if (store.state.authenticated !== true && store.state.profil.admin !== 1) {
        next("/identifiez_vous");
      } else {
        next();
      }
    },
  },
  {
    path: "/produits",
    name: "Products",
    component: Products,
    beforeEnter(to, from, next) {
      if (store.state.authenticated !== true && store.state.profil.admin !== 1) {
        next("/identifiez_vous");
      } else {
        next();
      }
    },
  },
  {
    path: "/utilisateurs",
    name: "Users",
    component: Users,
    beforeEnter(to, from, next) {
      if (store.state.authenticated !== true && store.state.profil.admin !== 1) {
        next("/identifiez_vous");
      } else {
        next();
      }
    },
  },
  {
    path: "/mon_profil",
    name: "User",
    component: User,
    beforeEnter(to, from, next) {
      if (store.state.authenticated !== true) {
        next("/identifiez_vous");
      } else {
        next();
      }
    },
  },
  {
    path: "/a_propos_de_nous",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
