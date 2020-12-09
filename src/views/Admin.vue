<template>
  <v-container>
    <v-card>
      <v-card-title> Bienvenue Admin</v-card-title>
    </v-card>
    <v-card>
      <v-card-title>Créer une catégorie</v-card-title>
      <v-text-field label="Entrer le nom d'une catégorie"></v-text-field>
      <v-btn type="submit">Valider</v-btn>
    </v-card>
    <v-card>
      <v-card-title>Créer produit</v-card-title>
      <v-text-field label="Entrer le nom du produit"></v-text-field>
      <v-text-field label="Entrer la description du produit"></v-text-field>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Sélectionner la catégorie"></v-select>
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
export default {
  data() {
    return {
      items: ["Cat 1", "Cat 2", "Cat 3", "Cat 4"],
    };
  },
};
</script>
<style></style>
