<template>
  <v-container>
    <v-card id="select" height="500" class="d-flex">
      <v-col cols="6" align-self="center">
        <v-card-title>Notre Selection</v-card-title>
        <v-card-text>Découvrez nos meilleurs fromages</v-card-text>
        <v-btn @click="go_to_select()">Voir plus</v-btn>
      </v-col>
      <v-col align-self="center" cols="6">
        <v-img height="500" src="../assets/selection.jpg" alt="image de notre selection" />
      </v-col>
    </v-card>
    <v-card id="plate" height="500" class="d-flex">
      <v-col align-self="center" cols="6">
        <v-img height="500" src="../assets/plate.jpg" alt="image de nos plateaux fromages" />
      </v-col>
      <v-col cols="6" align-self="center">
        <v-card-title>Nos plateaux de fromages</v-card-title>
        <v-card-text>Appréciez nos fromages à plusieurs</v-card-text>
        <v-btn @click="go_to_plate()">Voir plus</v-btn>
      </v-col>
    </v-card>
    <v-card id="present" height="500" class="d-flex">
      <v-col cols="6" align-self="center">
        <v-card-title>Nos idées cadeaux</v-card-title>
        <v-card-text>Faites vous plaisir pendant les fêtes</v-card-text>
        <v-btn @click="go_to_present()">Voir plus</v-btn>
      </v-col>
      <v-col align-self="center" cols="6">
        <v-img height="500" src="../assets/present.jpg" alt="image de nos idées cadeaux" />
      </v-col>
    </v-card>
    <v-card id="about" height="300">
      <v-card-title>A propos des Pitech</v-card-title>
      <v-card-text> Avec plus de 1000 brebis. Nous avons beaucoup de moment à partager avec vous.</v-card-text>
      <v-card-text> C'est pourquoi nous vous proposons de découvrir notre quotidien dans la ferme des Pitech. </v-card-text>
      <v-btn @click="go_to_about()">Découvrez-nous</v-btn>
    </v-card>
    <v-card id="comment" height="200">
      <v-card-text>"C'est le meilleur formage que j'ai jamais goûté de toute ma vie.</v-card-text>
      <v-card-text>Raphael D et Alexandre B ont commenté</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    go_to_select() {
      this.$router.push("/boutique/notre_selection");
    },
    go_to_plate() {
      this.$router.push("/boutique/nos_plateaux_fromages");
    },
    go_to_present() {
      this.$router.push("/boutique/nos_idées_cadeaux");
    },
    go_to_about() {
      this.$router.push("/a_propos_de_nous");
    },
  },
};
</script>
<style></style>
