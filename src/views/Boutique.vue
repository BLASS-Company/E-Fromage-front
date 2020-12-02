<template>
  <div id="boutique">
    <Produit
      v-for="produit in produits"
      :key="produit.name"
      v-bind:produit="produit"
    />
  </div>
</template>

<script>
import Produit from "../components/Produit.vue";

export default {
  name: "Boutique",
  components: { Produit },
  mounted() {
    this.$store.dispatch("loadProduits", this.$route.params.chemin);
  },
  computed: {
    produits() {
      return this.$store.state.produits
    }
  },
};
</script>

<style scoped></style>
