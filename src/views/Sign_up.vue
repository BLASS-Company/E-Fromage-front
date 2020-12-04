<template>
  <v-main>
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
              <v-text-field v-model="email" type="email" label="Adresse électronique" prepend-icon="mdi-email" />
              {{ errormail }}
            </v-form>
          </v-card-text>
          <v-card-text>
            <v-form>
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                label="Mot de passe"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
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
  </v-main>
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
    };
  },
  methods: {
    submitForm() {
      if (this.username === null || this.username === "") {
        this.errorusername = "Merci de saisir un nom d'utilisateur";
      } else if (this.email === null || this.email === "") {
        this.errormail = "Veuillez saisir une adresse mail valide";
      } else if (this.password === null || this.password === "" || this.password.length < 6) {
        this.errorpassword = "Merci de saisir un mot de passe avec plus de 6 caractères";
      } else {
        let form = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        alert("Votre inscription est enregistrée");
        this.$store.dispatch("signup", form);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
