<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, index) in cart_vue" :key="index" cols="12" sm="4">
        <v-card>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-text>{{ product.body }}</v-card-text>
          <v-card-text>{{ product.id }}</v-card-text>
          <v-btn color="error" @click="delete_cart()">Supprimer</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-card v-if="cart_vue.length">
      <v-card-title>Total : {{ totalPrice }} €</v-card-title>
      <v-btn color="success">Valider mon panier</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    delete_cart() {
      this.$store.state.cart_count -= 1;
      this.$store.state.cart.pop(this.product);
    },
  },
  computed: {
    cart_vue() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.state.cart.reduce((acc, v) => {
        acc += v.id;
        return acc;
      }, 0);
    },
  },
};
</script>

<style></style>
