<template>
<v-container>
    <div class="selection">
      <h3>Notre Selection</h3>
      <p>Découvrez nos meilleurs fromages</p>
      <button @click="selection()">Voir plus</button>
      <img src="../assets/selection.jpg" alt="selection" />
    </div>
    <div class="offer">
      <h3>Nos plateaux de fromages</h3>
      <p>Appréciez nos fromages à plusieurs</p>
      <button @click="plateau()">Voir plus</button>
      <img src="../assets/plateau.jpg" alt="plateau" />
    </div>
    <div class="present">
      <h3>Nos idées cadeaux</h3>
      <p>Faites vous plaisir pendant les fêtes</p>
      <button @click="cadeau()">Voir plus</button>
      <img src="../assets/cadeau.jpg" alt="cadeau" />
    </div>
    <div class="propos">
      <h3>A propos des Pitech</h3>
      <p>
        Avec plus de 1000 brebis. Nous avons beaucoup de moment à partager avec
        vous.
      </p>
      <p>
        C'est pourquoi nous vous proposons de découvrir notre quotidien dans la
        ferme des Pitech.
      </p>
      <button @click="propos()">Découvrez-nous</button>
    </div>
    <div class="avis">
      <p>"C'est le meilleur formage que j'ai jamais goûté de toute ma vie</p>
      <p>Raphael D et Alexandre B ont commenté</p>
    </div>
</v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Accueil",
  methods: {
    selection() {
      this.$router.push("/boutique/selection");
    },
    plateau() {
      this.$router.push("/boutique/plateau");
    },
    cadeau() {
      this.$router.push("/boutique/cadeau");
    },
    propos() {
      this.$router.push("/a_propos");
    }
  }
};
</script>
