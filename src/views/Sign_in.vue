<template>
  <v-main>
    <v-container>
      <v-card>
        <form @submit.prevent="checkform()">
          <v-card-title>Connectez-vous</v-card-title>
          <v-form>
            <v-text-field v-model="email" label="Entrez votre adresse électronique" prepend-icon="mdi-email" />
            <span v-if="mailerror != ''">{{ mailerror }}</span>
            <br v-if="mailerror != ''" />
            <v-text-field v-model="password" type="password" label="Entrez votre mot de passe" prepend-icon="mdi-lock" append-icon="mdi-eye-off" />
            <span v-if="passerror != ''">{{ passerror }}</span>
            <br v-if="passerror != ''" />
          </v-form>
          <v-card-actions>
            <v-btn type="submit" color="info">Me connecter</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Sign_in",
  data() {
    return {
      email: "",
      password: "",
      mailerror: "",
      passerror: "",
    };
  },
  methods: {
    checkform() {
      if (this.email == null || this.email == "") {
        this.mailerror = "Veuillez saisir une adresse électronique valide";
      } else if (this.password == null || this.password == "" || this.password.length < 6) {
        this.passerror = "Le mot de passe doit contenir au miimum 6 charactères";
      } else {
        let form = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("signin", form);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
