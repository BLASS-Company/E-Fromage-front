<template>
    <div>
        <img :src="image" alt="Désolé nous n'arrivons pas a afficher l'image de ce produit">
        <a>{{produit.name}}</a>
        <a>{{produit.description}}</a>
        <a>{{produit.prix}}</a>
        <a>{{produit.stock}}</a>
        <button @click="add_cart()">Ajouter au panier</button>
    </div>
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
        }
    },
    methods: {
        add_cart() {
            this.$store.state.panier += 1;
            this.$store.state.produits_panier.push(this.produit)
        }
    }
}
</script>

<style>

</style>