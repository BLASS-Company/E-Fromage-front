<template>
  <v-card>
    <v-app-bar>
      <v-toolbar-title>LA FERME DES PITECH</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" tag="v-tab">
        <v-tab>Accueil</v-tab>
      </router-link>
      <router-link :to="{ name: 'Shop', params: { id: undefined } }" tag="v-tab">
        <v-tab>Nos produits</v-tab>
      </router-link>
      <router-link to="/nous_contacter" tag="v-tab">
        <v-tab>Contact</v-tab>
      </router-link>
      <router-link to="/a_propos_de_nous" tag="v-tab">
        <v-tab>A propos</v-tab>
      </router-link>
      <router-link to="/mon_panier" tag="v-btn">
        <v-btn small>
          <v-spacer></v-spacer>
          <v-icon>fa-shopping-cart</v-icon>
          {{ cartcount }}
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/admin" tag="v-btn">
        <v-btn small v-if="profil.admin == 1">Tableau de bord admin</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/mon_profil" tag="v-btn">
        <v-btn small v-if="authenticated == true">{{ profil.name }}</v-btn>
      </router-link>
      <router-link to="/identifiez_vous" tag="v-btn">
        <v-btn small v-if="authenticated == false">Identifiez-vous</v-btn>
      </router-link>
      <v-btn small v-if="authenticated == true" @click="logout()">Se Déconnecter</v-btn>
      <router-link to="/inscrivez_vous" tag="v-btn">
        <v-btn small v-if="authenticated == false">Inscrivez-vous</v-btn>
      </router-link>
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
    profil() {
      return this.$store.state.profil;
    },
    authenticated() {
      return this.$store.state.authenticated;
    },
  },
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      document.cookie = "profil=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;secure";
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
