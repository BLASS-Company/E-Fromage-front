<template>
  <v-app-bar>
    <v-row align="start">
    <h2>LA FERME DES PITECH</h2>
    </v-row>
    <v-row align="center">
    <v-tab><router-link to="/">Accueil</router-link></v-tab>
    <v-tab><router-link to="/boutique/produits">Nos Produits</router-link></v-tab>
    <v-tab><router-link to="/nous_contacter">Contact</router-link></v-tab>
    <v-tab><router-link to="/a_propos_de_nous">A Propos</router-link></v-tab>
    </v-row>
    <v-tab>
      <v-icon @click="go_to_cart()">fa-shopping-cart</v-icon>
      {{ cartcount }}
   </v-tab>
    <v-tab @click="go_to_sign_in()">Identifiez-vous</v-tab>
    <v-tab @click="go_to_sign_up()">Inscrivez-vous</v-tab>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    cartcount() {
      return this.$store.state.cart_count;
    },
  },
  methods: {
    go_to_cart() {
      this.$router.push("/mon_panier");
    },
    go_to_sign_in() {
      this.$router.push("/identifiez_vous");
    },
    go_to_sign_up() {
      this.$router.push("/inscrivez_vous");
    },
  },
};
</script>

<style>

</style>
