<template>
  <v-app-bar>
    <h2>LA FERME DES PITECH</h2>
    <v-tab><router-link to="/">Accueil</router-link></v-tab>
    <v-tab><router-link to="/boutique/posts">Nos Produits</router-link></v-tab>
    <v-tab><router-link to="/contact">Contact</router-link></v-tab>
    <v-tab><router-link to="/a_propos">A Propos</router-link></v-tab>
    <v-tab>
      <v-icon @click="Panier()">fa-shopping-cart</v-icon>
      {{ paniercount }}
   </v-tab>
    <v-tab @click="Sign_in()">Identifiez-vous</v-tab>
    <v-tab @click="Sign_up()">Inscrivez-vous</v-tab>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    paniercount() {
      return this.$store.state.panier;
    },
  },
  methods: {
    Panier() {
      this.$router.push("/panier");
    },
    Sign_in() {
      this.$router.push("/identifiez_vous");
    },
    Sign_up() {
      this.$router.push("/inscrivez_vous");
    },
  },
};
</script>

<style>
#v-tab{
 text-decoration: none;
}
</style>
