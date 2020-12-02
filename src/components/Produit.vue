<template>
  <article>
    <img :src="image" alt="Désolé nous n'arrivons pas a afficher l'image de ce produit" />
    <p>{{ produit.title }}</p>
    <p>{{ produit.body }}</p>
    <!-- <p>{{produit.name}}</p>
        <p>{{produit.description}}</p>
        <p>{{produit.prix}}</p>
        <p>{{produit.stock}}</p> -->
    <button @click="add_cart()">Ajouter au panier</button>
  </article>
</template>

<script>
export default {
  name: "Produit",
  props: {
    produit: {
      id: Number,
      name: String,
      description: String,
      prix: String,
      image: String,
      stock: Number,
    },
  },
  methods: {
    add_cart() {
      this.$store.state.panier += 1;
      this.$store.state.produits_panier.push(this.produit);
    },
  },
};
</script>

<style></style>
