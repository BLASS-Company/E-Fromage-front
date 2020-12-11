<template>
  <v-container>
    <v-card height="100%">
      <v-card-title>{{ product.name }}</v-card-title>
      <v-img aspect-ratio="2" :src="product.image" :alt="`image de ${product.name}`"> </v-img>
      <v-card-subtitle>{{ product.description }}</v-card-subtitle>
      <v-card-text>{{ product.price }} €</v-card-text>
      <v-card-actions>
        <v-btn small color="info" @click="add_cart()">Ajouter au panier</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      id: Number,
      name: String,
      description: String,
      price: Number,
      image: String,
      stock: Number,
      measure_unit: String,
    },
  },
  methods: {
    add_cart() {
      this.$store.state.cart_count += 1;
      this.$store.state.cart.push(this.product);
      const parsed = JSON.stringify(this.$store.state.cart)
      localStorage.setItem('$store.state.cart', parsed)
    },
  },
};
</script>

<style></style>
