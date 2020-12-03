<template>
  <div>
    {{ produit }}
  </div>
</template>

<script>
export default {
  name: "Produit",
  props: {
    produit: {
      name: String,
      description: String,
      prix: String
    }
  },
  data() {
    return {
      count: this.$store.state.count
    };
  }
};
</script>

<style></style>
