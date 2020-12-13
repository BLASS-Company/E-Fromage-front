<template>
  <v-container>
    <v-card height="100%">
      <v-card-title>{{ user.id }} . {{ user.name }}</v-card-title>
      <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      <v-card-text>{{ user.admin }}</v-card-text>
      <v-card-actions>
        <v-btn small color="info" @click="update()">Editer l'utilisateur</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn small color="info" @click="del()">Supprimer l'utilisateur</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "UserAdmin",
  props: {
    user: {
      id: Number,
      name: String,
      email: String,
      admin: Number,
    },
  },
  methods: {
    update() {
      this.$emit("edituser", this.user.id);
    },
    del() {
      let token = this.$store.state.profil.token;
      this.axios
        .delete(`${process.env.VUE_APP_ENDPOINT}/user/${this.user.id}`, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.$store.commit("SUCCES", response.data.message);
        })
        .catch((error) => {
          this.$store.commit("ERROR", error.message);
        });
    },
  },
  mounted() {
    if (this.user.admin == 1) {
      this.user.admin = "admin";
    } else {
      this.user.admin = "user";
    }
  },
};
</script>

<style></style>
