<template>
  <v-app>
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

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    NavigationMobile,
    Scroll,
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
};
</script>
