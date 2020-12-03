<template>
  <v-app>
      <Navbar />
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
