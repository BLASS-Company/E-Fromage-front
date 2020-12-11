<template>
  <v-container>
    <h2>Mon Panier</h2>
    <v-row>
      <v-col v-for="product in cart_vue" :key="product.id" cols="12" sm="4">
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-img aspect-ratio="1.5" :src="product.image" :alt="`image de ${product.name}`"> </v-img>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-text>{{ product.price }}</v-card-text>
          <v-btn color="error" @click="delete_cart()">Supprimer</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-card v-if="cart_vue.length">
      <v-card-title>Total : {{ totalPrice }} €</v-card-title>
      <v-btn color="success" @click="validateCart()">Valider mon panier</v-btn>
      <v-btn color="error" @click="deleteCartVue()">Supprimer mon panier</v-btn>
    </v-card>
    <v-card>
      <ValidateForm v-if="ValidateFormView" />
    </v-card>
  </v-container>
</template>

<script>
import ValidateForm from "@/components/ValidateForm.vue";

export default {
  name: "Cart",
  components: {
    ValidateForm,
  },
  data() {
    return {
      ValidateFormView: false,
    };
  },

  mounted () {
    if(localStorage.getItem("$store.state.cart")){
      try{
        this.$store.state.cart = JSON.parse(localStorage.getItem("$store.state.cart"))
      } catch(e){
        localStorage.removeItem('$store.state.cart')
      }
    }
  },
  
  methods: {
    delete_cart() {
      this.$store.state.cart_count -= 1;
      this.$store.state.cart.pop(this.product);
      
    },
    deleteCartVue() {
      this.$store.state.cart.splice(this.products);
      this.$store.state.cart_count = 0;
    },

    validateCart() {
      this.ValidateFormView = true;
    },
   
  },
  computed: {
    cart_vue() {
      return this.$store.state.cart;
    },
   
    totalPrice() {
      return this.$store.state.cart.reduce((acc, v) => {
        acc += v.price;
        return acc;
      }, 0);
    },
  },
};
</script>

<style></style>
