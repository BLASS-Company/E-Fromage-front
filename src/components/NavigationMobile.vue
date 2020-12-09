<template>
  <v-card>
    <v-app-bar prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> LA FERME DES PITECH</v-toolbar-title>
      <v-btn icon><v-icon @click="goToCart()">fa-shopping-cart</v-icon>{{ cartCount }}</v-btn>
      <v-btn icon><v-icon @click="goToSignIn()">fa-sign-in-alt</v-icon></v-btn>
      <v-btn icon><v-icon @click="goToSignUp()">fa-user-plus</v-icon></v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute>
      <v-list>
        <v-list-item-group>
          <v-tab @click="goToHome()">Accueil</v-tab>
          <v-tab @click="goToShop()">Nos produits</v-tab>
          <v-tab @click="goToContact()">Contact</v-tab>
          <v-tab @click="goToAbout()">A propos</v-tab>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
  }),
  computed: {
    cartCount() {
      return this.$store.state.cart_count;
    },
  },
  methods: {
    goToCart() {
      this.$router.push("/mon_panier");
    },
    goToSignIn() {
      this.$router.push("/identifiez_vous");
    },
    goToSignUp() {
      this.$router.push("/inscrivez_vous");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToShop() {
      this.$router.push("/boutique/posts");
    },
    goToContact() {
      this.$router.push("/nous_contacter");
    },
    goToAbout() {
      this.$router.push("/a_propos_de_nous");
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>
