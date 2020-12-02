<template>
  <div id="nav">
      <img src="" alt="Logo la ferme d'epitech">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/boutique/posts">Nos Produits</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/a_propos">A Propos</router-link>
      <div>
        <img src="" alt="petit panier" @click="Panier()">
        {{paniercount}}
      </div>
      <button @click="Sign_in()">Identifiez-vous</button>
      <button @click="Sign_up()">Inscrivez-vous</button>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        paniercount() {
            return this.$store.state.panier
        }
    },
    methods: {
        Panier() {
            this.$router.push("/panier")
        },
        Sign_in() {
            this.$router.push("/identifiez_vous")
        },
        Sign_up() {
            this.$router.push("/inscrivez_vous")
        }
    }
}
</script>

<style>

</style>