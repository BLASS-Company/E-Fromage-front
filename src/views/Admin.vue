<template>
  <v-container>
    <v-card>
      <v-card-title> Bienvenue Admin</v-card-title>
    </v-card>
    <v-card>
      <v-card-title>Categories</v-card-title>
      <v-text>Ici vous prourrez voir, créer, modifier ou supprimer les catégories</v-text>
      <v-card-actions>
        <router-link :to="{ name: 'Categories' }">
          <v-btn>Voir les catégories</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-card-title>Produits</v-card-title>
      <v-text>Ici vous prourrez voir, créer, modifier ou supprimer les produits</v-text>
      <v-card-actions>
        <router-link :to="{ name: 'Products' }">
          <v-btn>Voir les produits</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-card-title>Utilisateurs</v-card-title>
      <v-text>Ici vous prourrez voir, modifier ou supprimer les utilisateurs</v-text>
      <v-card-actions>
        <router-link :to="{ name: 'Users' }">
          <v-btn>Voir les utilisateurs</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Admin",
  data() {
    return {
      catname: "",
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    addCat() {
      if (this.cat_name === null || this.cat_name === "") {
        this.caterror = "la categorie doit avoir un nom";
      } else {
        this.$store.dispatch("createCategory", this.cat_name);
      }
    },
  },
  mounted() {
    this.$store.dispatch("loadCategories");
  },
};
</script>
<style></style>
