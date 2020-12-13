<template>
  <v-app>
    <Message />
    <NavigationMobile v-if="mobileView" />
    <Navbar v-if="!mobileView" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Scroll />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavigationMobile from "@/components/NavigationMobile.vue";
import Scroll from "./components/Scroll.vue";
import Message from "@/components/Message.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    NavigationMobile,
    Scroll,
    Message,
  },

  data: () => ({
    mobileView: "",
  }),

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 700;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },

  mounted() {
    if (localStorage.getItem("$store.state.cart")) {
      try {
        this.$store.state.cart = JSON.parse(localStorage.getItem("$store.state.cart"));
      } catch (e) {
        localStorage.removeItem("$store.state.cart");
      }
    }
    if (localStorage.getItem("$store.state.cart_count")) {
      try {
        this.$store.state.cart_count = JSON.parse(localStorage.getItem("$store.state.cart_count"));
      } catch (e) {
        localStorage.removeItem("$state.state.cart_count");
      }
    }
  },
};
</script>
