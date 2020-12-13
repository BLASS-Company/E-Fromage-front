<template>
  <v-container class="d-sm-flex flex-row flex-wrap">
    <v-card-text v-if="error">{{ error_message }}</v-card-text>
    <v-card height="100%" v-if="edit">
      <v-text-field label="Entrer le nouveau nom de l'utilisateur"></v-text-field>
      <v-text-field label="Entrer le nouvel email de l'utilisateur"></v-text-field>
      <v-text-field label="Entrer le niveau de permission de l'utilisateur"></v-text-field>
      <v-btn type="submit">Valider</v-btn>
    </v-card>
    <UserAdmin class="col-4" v-for="user in users" :key="user.id" v-bind:user="user" @edituser="updated()" v-else />
  </v-container>
</template>

<script>
import UserAdmin from "@/components/UserAdmin";

export default {
  name: "Users",
  components: { UserAdmin },
  data() {
    return {
      error: false,
      error_message: "",
      users: [],
      edit: false,
    };
  },
  methods: {
    updated(id) {
      console.log(id);
    },
  },
  mounted() {
    let token = this.$store.state.profil.token;
    this.axios
      .get(`${process.env.VUE_APP_ENDPOINT}/users`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        this.error = true;
        this.error_message = error.message;
      });
  },
};
</script>

<style></style>
