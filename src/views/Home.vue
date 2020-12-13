<template>
  <v-main>
    <v-container>
      <v-card id="select" height="500" class="d-flex text-center">
        <v-col cols="6" align-self="center">
          <v-card-title class="justify-center">Notre Selection</v-card-title>
          <v-card-text>Découvrez nos meilleurs fromages</v-card-text>
          <router-link :to="{ name: 'Shop', params: { id: 2 } }" tag="v-btn">
            <v-btn>Voir plus</v-btn>
          </router-link>
        </v-col>
        <v-col align-self="center" cols="6">
          <v-img
            aspect-ratio="1.5"
            src="https://images.unsplash.com/photo-1541696303913-8668e3f7e9fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image de notre selection"
          />
        </v-col>
      </v-card>
    </v-container>
    <v-container>
      <v-card id="plate" height="500" class="d-flex text-center">
        <v-col align-self="center" cols="6">
          <v-img
            aspect-ratio="1.5"
            src="https://images.unsplash.com/photo-1598306442890-742e834da092?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="image de nos plateaux fromages"
          />
        </v-col>
        <v-col cols="6" align-self="center">
          <v-card-title class="justify-center">Nos plateaux de fromages</v-card-title>
          <v-card-text>Appréciez nos fromages à plusieurs</v-card-text>
          <router-link :to="{ name: 'Shop', params: { id: 3 } }" tag="v-btn">
            <v-btn>Voir plus</v-btn>
          </router-link>
        </v-col>
      </v-card>
    </v-container>
    <v-container>
      <v-card id="present" height="500" class="d-flex text-center">
        <v-col cols="6" align-self="center">
          <v-card-title class="justify-center">Nos idées cadeaux</v-card-title>
          <v-card-text>Faites vous plaisir pendant les fêtes</v-card-text>
          <router-link :to="{ name: 'Shop', params: { id: 1 } }" tag="v-btn">
            <v-btn>Voir plus</v-btn>
          </router-link>
        </v-col>
        <v-col align-self="center" cols="6">
          <v-img
            aspect-ratio="1.5"
            src="https://images.unsplash.com/photo-1540289917366-db90f08d2397?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1363&q=80"
            alt="image de nos idées cadeaux"
          />
        </v-col>
      </v-card>
    </v-container>
    <v-container>
      <v-card class="text-center" id="about" height="300">
        <v-card-title class="justify-center">A propos des Pitech</v-card-title>
        <v-card-text> Avec plus de 1000 brebis. Nous avons beaucoup de moment à partager avec vous.</v-card-text>
        <v-card-text> C'est pourquoi nous vous proposons de découvrir notre quotidien dans la ferme des Pitech. </v-card-text>
        <router-link to="/a_propos_de_nous" tag="v-btn">
          <v-btn>Découvrez-nous</v-btn>
        </router-link>
      </v-card>
    </v-container>
    <v-container>
      <v-card class="text-center" id="comment" height="200">
        <v-card-title class="justify-center">Vos avis</v-card-title>
        <v-card-text>Raphael D et Alexandre B ont commenté :</v-card-text>
        <v-card-text>"C'est le meilleur formage que j'ai jamais goûté de toute ma vie."</v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style></style>
