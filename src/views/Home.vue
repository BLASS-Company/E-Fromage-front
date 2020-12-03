<template>
<v-container>
  <v-row>
    <div class="selection">
      <h3>Notre Selection</h3>
      <p>Découvrez nos meilleurs fromages</p>
      <v-btn @click="selection()">Voir plus</v-btn>
      <v-col>
      <v-img max-height="500" max-width="500" src="../assets/selection.jpg" alt="image de notre selection" />
      </v-col>
    </div>
  </v-row>
    <div class="offer">
      <h3>Nos plateaux de fromages</h3>
      <p>Appréciez nos fromages à plusieurs</p>
      <v-btn @click="plateau()">Voir plus</v-btn>
      <v-img max-height="500" max-width="500" src="../assets/plate.jpg" alt="image de nos plateaux fromages" />
    </div>
    <div class="present">
      <h3>Nos idées cadeaux</h3>
      <p>Faites vous plaisir pendant les fêtes</p>
      <v-btn @click="cadeau()">Voir plus</v-btn>
      <v-img max-height="500" max-width="500" src="../assets/present.jpg" alt="image de nos idées cadeaux" />
    </div>
    <div class="about">
      <h3>A propos des Pitech</h3>
      <p>
        Avec plus de 1000 brebis. Nous avons beaucoup de moment à partager avec
        vous.
      </p>
      <p>
        C'est pourquoi nous vous proposons de découvrir notre quotidien dans la
        ferme des Pitech.
      </p>
      <button @click="go_to_about()">Découvrez-nous</button>
    </div>
    <div class="comment">
      <p>"C'est le meilleur formage que j'ai jamais goûté de toute ma vie</p>
      <p>Raphael D et Alexandre B ont commenté</p>
    </div>
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
    }
  }
};
</script>
<style>


</style>
