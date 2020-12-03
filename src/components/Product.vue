<template>
  <article>
    <img
      :src="image"
      alt="image du produit"
    />
    <p>{{ product.title }}</p>
    <p>{{ product.body }}</p>
    <!-- <p>{{product.name}}</p>
        <p>{{product.description}}</p>
        <p>{{product.price}}</p>
        <p>{{product.stock}}</p> -->
    <button @click="add_cart()">Ajouter au panier</button>
  </article>
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
      stock: Number
    }
  },
  methods: {
    add_cart() {
      this.$store.state.cart_count += 1;
      this.$store.state.cart.push(this.product);
      console.log(this.$store.state.cart)
    }
  }
};
</script>

<style></style>
