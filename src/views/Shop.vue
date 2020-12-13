<template>
  <v-container class="d-sm-flex flex-row flex-wrap">
    <Product class="col-4" v-for="product in products" :key="product.id" v-bind:product="product" />
  </v-container>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "Shop",
  components: { Product },
  props: {
    id: Number,
  },
  mounted() {
    this.$store.dispatch("loadProducts", this.id);
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
