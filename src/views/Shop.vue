<template>
  <v-container>
    <Product
      v-for="product in products"
      :key="product.name"
      v-bind:product="product"
    />
  </v-container>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "Shop",
  components: { Product },
  mounted() {
    this.$store.dispatch("loadProducts", this.$route.params.shop);
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped></style>
