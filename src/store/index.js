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
    cart: []
  },
  mutations: {
    SET_Products(state, products) {
      state.products = products;
    },
    UPDATE_Products(state, products) {
      state.products.push(products);
    }
  },
  actions: {
    loadProducts({ commit }, road) {
      axios
        .get(`https://arcane-ocean-14421.herokuapp.com/api/${road}`, {
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => {
          commit("SET_Products", response.data);
        });
    },

    changeProducts() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => {
          console.log(response);
          this.commit("UPDATE_Products", response.data);
        });
    }
  },
  modules: {}
});
