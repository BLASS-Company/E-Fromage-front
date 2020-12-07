<template>
  <v-app>
    <NavigationMobile v-if="mobileView" />
    <Navbar v-if="!mobileView" />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavigationMobile from "@/components/NavigationMobile.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    NavigationMobile,
  },

  data: () => ({
    mobileView: true,
    showNav: false,
  }),

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    },
  },

  created() {
    this.handleView();
  },
};
</script>
