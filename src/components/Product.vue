<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card>
          <v-img alt="image du produit" />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-img :src="require(`@/assets/${product.image}.jpg`)" alt="une image"> </v-img>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-text>{{ product.price }}</v-card-text>
          <v-btn color="info" @click="add_cart()">Ajouter au panier</v-btn>
        </v-card>
      </v-col>
    </v-row>
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
    },
  },
  methods: {
    add_cart() {
      this.$store.state.cart_count += 1;
      this.$store.state.cart.push(this.product);
      console.log(this.$store.state.cart);
    },
  },
};
</script>

<style></style>
