<template>
  <div id="boutique">
    <Produit
      v-for="produit in produits"
      :key="produit.name"
      v-bind:produit="produit"
    />
    <button @click="newproduits()">test moi</button>
  </div>
</template>

<script>
import Produit from "../components/Produit.vue";

export default {
  name: "Boutique",
  components: { Produit },
  mounted() {
    this.$store.dispatch("loadProduits");
  },
  computed: {
    produits() {
      return this.$store.state.produits;
    }
  },
  methods: {
    newproduits() {
      this.$store.dispatch("changeProduits");
    }
  }
};
</script>

<style scoped></style>
