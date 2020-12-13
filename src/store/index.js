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
    profil: "",
    categories: [],
    message: "",
    created: false,
    errored: false,
  },
  mutations: {
    SET_Products(state, products) {
      state.products = products;
    },
    UPDATE_Products(state, products) {
      state.products.push(products);
    },
    SET_Categories(state, categories) {
      state.categories = categories;
    },
    UPDATE_Categories(state, data) {
      state.categories.push(data[0]);
      state.message = data.message;
      state.created = true;
    },
    SET_Profil(state, profil) {
      state.profil = profil.username;
    },
    UPDATE_Profil(state, profil) {
      state.profil = profil.email;
    },
    ERROR(state, message) {
      state.message = message;
      state.errored = true;
    }
  },
  actions: {
    //route en get: .env/products || product/{id} || products_category/{id} || categories || category/{id}
    //route en post: .env/product || category || register || login
    //route en put: .env/product/{id} || category/{id}
    //route en delete: .env/product/{id} || category/{id}

    loadProducts({ commit }, id) {
      let road = `products_category/${id}`
      if (id == undefined){
        road = "products"
      }
      axios
        .get(`${process.env.VUE_APP_ENDPOINT}/${road}`, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          commit("SET_Products", response.data);
        })
        .catch((error) => {
          commit("ERROR", error.message)
        });
    },

    loadCategories({ commit }) {
      axios
        .get(`${process.env.VUE_APP_ENDPOINT}/categories`, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          commit("SET_Categories", response.data);
        })
        .catch((error) => {
          commit("ERROR", error.message)
        });
    },

    createCategory({commit}, category) {
      let body = JSON.stringify({"name": category})
      axios
        .post(`${process.env.VUE_APP_ENDPOINT}/category`, body, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status == true){
            commit("UPDATE_Categories", response.data);
          }
          else {
            throw new Error("un problème est survenu lors de la création de la categorie")
          }
        })
        .catch((error) => {
          commit("ERROR", error.message)
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
