<template>
  <v-container>
    <v-card>
      <form @submit.prevent="checkform()">
        <v-card-title>Connectez-vous</v-card-title>
        <v-form>
          <v-text-field v-model="email" :rules="emailRules" label="Entrez votre adresse électronique" prepend-icon="mdi-email" />
          <span v-if="mailerror != ''">{{ mailerror }}</span>
          <br v-if="mailerror != ''" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRules"
            v-model="password"
            label="Entrez votre mot de passe"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <span v-if="passerror != ''">{{ passerror }}</span>
          <br v-if="passerror != ''" />
        </v-form>
        <v-card-actions>
          <v-btn type="submit" color="info">Me connecter</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
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
      showPassword: false,
      emailRules: [(v) => /.+@.+/.test(v) || "Une adresse mail doit contenir un @"],
      passwordRules: [(v) => v.length > 6 || "Le mot de passe doit contenir plus de 6 caractères"],
    };
  },
  methods: {
    validEmail(email) {
      let mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mail.test(email);
    },
    checkform() {
      if (this.email == null || this.email == "") {
        this.mailerror = "Veuillez saisir une adresse électronique";
      } else if (!this.validEmail(this.email)) {
        this.errormail = " Merci de saisir une adresse mail valide";
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
