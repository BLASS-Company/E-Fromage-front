<template>
  <v-container>
    <v-btn to="/admin">Back</v-btn>
    <v-card>
      <v-card-title>Créer une catégorie {{ catname }}</v-card-title>
      <v-text-field label="Entrer le nom d'une catégorie" v-model="newcatname"></v-text-field>
      <span v-if="caterror != ''">{{ caterror }}</span>
      <br v-if="caterror != ''" />
      <v-btn type="submit" @click="addCat()">Valider</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Categories",
  props: {
    catname: String,
  },
  data() {
    return {
      newcatname: "",
      caterror: "",
    };
  },
};
</script>

<style></style>
