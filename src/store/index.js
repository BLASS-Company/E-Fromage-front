import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    products: [],
    cart_count: 0,
    cart: [],
  },
  mutations: {
    SET_Products(state, products) {
      state.products = products;
    },
    UPDATE_Products(state, products) {
      state.products.push(products);
    },
    UPDATE_Profil(state, profil) {
      state.profil = profil.email;
    },
    SET_Profil(state, profil) {
      state.profil = profil.username;
    },
  },
  actions: {
    loadProducts({ commit }, road) {
      axios
        .get(`https://jsonplaceholder.typicode.com/${road}`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          commit("SET_Products", response.data);
        });
    },

    changeProducts() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response);
          this.commit("UPDATE_Products", response.data);
        });
    },
    signin({ commit }, form) {
      console.log(commit);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: JSON.stringify(form),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response.data);
          commit("UPDATE_Profil", form);
        });
    },
    signup({ commit }, form) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: JSON.stringify(form),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response.data);
          commit("SET_Profil", form);
        });
    },
  },
  modules: {},
});
