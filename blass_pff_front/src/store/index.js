import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    produits: [],
  },
  // getters: {
  //   produits: state => {
  //       return state.produits;
  //   }
  // },
  mutations: {
    SET_Produits (state, produits) {
      state.produits = produits
    },
    UPDATE_Produits (state, produits) {
      state.produits.push(produits);
    }
  },
  actions: {
    loadProduits ({ commit }) {
      axios
          .get('https://jsonplaceholder.typicode.com/posts', {
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
          })
          .then(response => {
          commit('SET_Produits', response.data)
          })
    },


    changeProduits () {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        console.log(response);
        // this.dispatch('loadProduits');
        this.commit('UPDATE_Produits', response.data);
      })
    }
  },
  modules: {},
});
