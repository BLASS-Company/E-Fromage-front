<template>
  <v-container>
    <v-card>
      <form @submit.prevent="submitForm">
        <v-card-title>Je m'inscris</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="username" label="Nom d'utilisateur" prepend-icon="mdi-account-circle" />
            {{ errorusername }}
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" :rules="emailRules" type="email" label="Adresse électronique" prepend-icon="mdi-email" />
            {{ errormail }}
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              :rules="passwordRules"
              v-model="password"
              label="Mot de passe"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
            {{ errorpassword }}
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="success">S'inscrire</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Sign_up",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errorusername: "",
      errormail: "",
      errorpassword: "",
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
    
    submitForm() {
      if (this.username === null || this.username === "") {
        this.errorusername = "Merci de saisir un nom d'utilisateur";
      } else if (!this.validEmail(this.email)) {
        this.errormail = " Merci de saisir une adresse mail valide";
      } else if (this.email === null || this.email === "") {
        this.errormail = "Veuillez saisir une adresse mail";
      } else if (this.password === null || this.password === "" || this.password.length < 6) {
        this.errorpassword = "Merci de saisir un mot de passe avec plus de 6 caractères";
      } else {
        let form = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("signup", form);
        this.$router.push("/");
      }
    },
    
  },
};
</script>

<style></style>
