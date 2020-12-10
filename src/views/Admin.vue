<template>
  <v-container>
    <Message />
    <v-card>
      <v-card-title> Bienvenue Admin</v-card-title>
    </v-card>
    <v-card>
      <v-card-title>Créer une catégorie</v-card-title>
      <v-text-field label="Entrer le nom d'une catégorie" v-model="cat_name"></v-text-field>
      <span v-if="caterror != ''">{{ caterror }}</span>
      <br v-if="caterror != ''" />
      <v-btn type="submit" @click="addCat()">Valider</v-btn>
    </v-card>
    <v-card>
      <v-card-title>Créer produit</v-card-title>
      <v-text-field label="Entrer le nom du produit"></v-text-field>
      <v-text-field label="Entrer la description du produit"></v-text-field>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="categories" item-text="name" item-value="id" label="Sélectionner la catégorie"></v-select>
        </v-col>
      </v-row>
      <v-text-field label="Entrer le stock"></v-text-field>
      <v-text-field label="Entrer le prix"></v-text-field>
      <v-btn type="submit">Valider</v-btn>
    </v-card>

    <v-card>
      <v-card-title>Supprimer un produit</v-card-title>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select label="Sélectionner le produit"></v-select>
        </v-col>
      </v-row>
      <v-btn type="submit">Supprimer le produit</v-btn>
    </v-card>
  </v-container>
</template>
<script>
import Message from "../components/Message.vue";

export default {
  name: "Admin",
  components: { Message },
  data() {
    return {
      cat_name: "",
      caterror: "",
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
