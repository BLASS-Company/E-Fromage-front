<template>
  <div>
      {{vue_panier}}
  </div>
</template>

<script>
export default {
    name: "Panier",
    computed: {
      vue_panier() {
        return this.$store.state.produits_panier
      }
    }

}
</script>

<style>

</style>