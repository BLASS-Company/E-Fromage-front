<template>
  <v-card class="overflow-hidden">
    <v-app-bar prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>LA FERME DES PITECH</v-toolbar-title>
      <v-btn icon><v-icon @click="go_to_sign_in()">fa-sign-in-alt</v-icon></v-btn>
      <v-btn icon><v-icon @click="go_to_sign_up()">fa-user-plus</v-icon></v-btn>
      <v-navigation-drawer v-model="drawer" absolute height="500px">
        <v-list>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-tab>Accueil</v-tab>
            <v-tab>Nos produits</v-tab>
            <v-tab>Contact</v-tab>
            <v-tab>A propos</v-tab>
          </v-list-item-group>
        </v-list>
        <!-- <v-icon @click="go_to_cart()">fa-shopping-cart</v-icon>
              {{ cartcount }}
            
           
            <v-btn small @click="go_to_sign_in()">Identifiez-vous</v-btn>
            <v-btn small @click="go_to_sign_up()">Inscrivez-vous</v-btn>
          -->
      </v-navigation-drawer>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
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
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>
