<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col v-for="(product, index) in cart_vue" :key="index"  cols="12"
        sm="4">
        <v-card>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-text>{{ product.body }}</v-card-text>
        <!-- <p>{{product.name}}</p>
        <p>{{product.description}}</p>
        <p>{{product.price}}</p>
        <p>{{product.stock}}</p> -->
        </v-card>
      </v-col>
    </v-row>
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
