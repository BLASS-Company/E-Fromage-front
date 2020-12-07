<template>
  <v-card>
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>LA FERME DES PITECH</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small><router-link to="/">Accueil</router-link></v-btn>
      <v-btn small><router-link to="/boutique/posts">Nos Produits</router-link></v-btn>
      <v-btn small><router-link to="/nous_contacter">Contact</router-link></v-btn>
      <v-btn small><router-link to="/a_propos_de_nous">A Propos</router-link></v-btn>
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

<style></style>
