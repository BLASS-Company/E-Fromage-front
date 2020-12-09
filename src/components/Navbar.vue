<template>
<<<<<<< HEAD
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
=======
  <v-card>
    <v-app-bar>
      <v-toolbar-title>LA FERME DES PITECH</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tab @click="go_to_home()">Accueil</v-tab>
      <v-tab @click="go_to_shop()">Nos produits</v-tab>
      <v-tab @click="go_to_contact()">Contact</v-tab>
      <v-tab @click="go_to_about()">A propos</v-tab>
      <v-btn small>
        <v-spacer></v-spacer>
        <v-icon @click="go_to_cart()">fa-shopping-cart</v-icon>
        {{ cartcount }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn small @click="go_to_sign_in()">Identifiez-vous</v-btn>
      <v-btn small @click="go_to_sign_up()">Inscrivez-vous</v-btn>
    </v-app-bar>
  </v-card>
>>>>>>> develop
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
    go_to_home() {
      this.$router.push("/");
    },
    go_to_shop() {
      this.$router.push("/boutique/nos_produits");
    },
    go_to_contact() {
      this.$router.push("/nous_contacter");
    },
    go_to_about() {
      this.$router.push("/a_propos_de_nous");
    },
  },
};
</script>

<style></style>
