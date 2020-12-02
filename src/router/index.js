import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";
import Boutique from "@/views/Boutique.vue";
import Contact from "@/views/Contact.vue";
import Panier from "@/views/Panier.vue";
import Sign_in from "@/views/Sign_in.vue";
import Sign_up from "@/views/Sign_up.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/boutique/:chemin",
    name: "Boutique",
    component: Boutique
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/panier",
    name: "Panier",
    component: Panier
  },
  {
    path: "/identifiez_vous",
    name: "Sign_in",
    component: Sign_in
  },
  {
    path: "/inscrivez_vous",
    name: "Sign_up",
    component: Sign_up
  },
  {
    path: "/a_propos",
    name: "A_Propos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/A_Propos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
