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
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
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
    let profil = this.getCookie("profil");
    let auth = false;
    if (profil !== "") {
      profil = JSON.parse(profil);
      auth = true;
    }
    this.$store.commit("SET_Profil", profil);
    this.$store.commit("AUTH", auth);
  },
};
</script>
