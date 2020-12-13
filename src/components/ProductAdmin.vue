<template>
  <v-container>
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
export default {
  name: "ProductAdmin",
};
</script>

<style></style>
