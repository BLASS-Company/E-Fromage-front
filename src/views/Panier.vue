<template>
  <div>
    <ul>
      <li v-for="(produit, index) in vue_panier" :key="index">
        <p>{{ produit.title }}</p>
        <p>{{ produit.body }}</p>
        <!-- <p>{{produit.name}}</p>
        <p>{{produit.description}}</p>
        <p>{{produit.prix}}</p>
        <p>{{produit.stock}}</p> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Panier",
  computed: {
    vue_panier() {
      return this.$store.state.produits_panier;
    },
  },
};
</script>

<style></style>
