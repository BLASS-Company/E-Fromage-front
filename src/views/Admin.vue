<template>
  <v-container>
    <Message />
    <v-card>
      <v-card-title> Bienvenue Admin</v-card-title>
    </v-card>
    <v-card>
      <v-card-title>Modifier les Categories</v-card-title>
      <v-text-field label="chercher une categorie" v-model="catname"></v-text-field>
      <v-select :items="categories" item-text="name" item-value="id" label="Sélectionner une catégorie"></v-select>
      <v-card-actions>
      <router-link :to="{name: 'Categories', params:{name: `${this.catname}`}}">
      <v-btn>Voir les catégories</v-btn>
      </router-link>
      </v-card-actions>
    </v-card>
    
  </v-container>
</template>
<script>
import Message from "../components/Message.vue";

export default {
  name: "Admin",
  components: { Message },
  data(){
    return {
      catname: "",
    }
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
