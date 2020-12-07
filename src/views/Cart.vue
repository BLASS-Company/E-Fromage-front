<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col v-for="(product, index) in cart_vue" :key="index" cols="12" sm="4">
        <v-card>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-text>{{ product.body }}</v-card-text>
          <v-btn color="error" @click="delete_cart()">Supprimer</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    delete_cart() {
      this.$store.state.cart_count -= 1;
      this.$store.state.cart.pop(this.product);
      console.log(this.$store.state.cart);
    },
  },
  computed: {
    cart_vue() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style></style>
