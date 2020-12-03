<template>
  <v-container>
    <ul>
      <li v-for="(product, index) in cart_vue" :key="index">
        <p>{{ product.title }}</p>
        <p>{{ product.body }}</p>
        <!-- <p>{{product.name}}</p>
        <p>{{product.description}}</p>
        <p>{{product.price}}</p>
        <p>{{product.stock}}</p> -->
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cart_vue() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style></style>
