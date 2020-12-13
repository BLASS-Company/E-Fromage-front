<template>
  <v-container>
    <v-card>
      <form @submit.prevent="submitForm">
        <v-card-title>Je m'inscris</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="username" label="Nom d'utilisateur" prepend-icon="mdi-account-circle" />
            <span>{{ errorusername }}</span>
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" :rules="emailRules" type="email" label="Adresse électronique" prepend-icon="mdi-email" />
            <span>{{ errormail }}</span>
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
            >
              <template v-slot:append>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon color="primary" dark v-on="on" @click="changepwdtype()">{{ eyestatus }}</v-icon>
                  </template>
                  <span>Attention en cliquant sur cette icone votre mot de passe sera visible</span>
                </v-tooltip>
              </template>
            </v-text-field>
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
      eyestatus: "mdi-eye-off",
      showPassword: false,
      emailRules: [(v) => /.+@.+/.test(v) || "Une adresse mail doit contenir un @"],
      passwordRules: [(v) => v.length > 6 || "Le mot de passe doit contenir plus de 6 caractères"],
    };
  },
  methods: {
    changepwdtype() {
      if (this.showPassword == false && this.eyestatus == "mdi-eye-off") {
        this.showPassword = true;
        this.eyestatus = "mdi-eye";
      } else {
        this.showPassword = false;
        this.eyestatus = "mdi-eye-off";
      }
    },
    validEmail(email) {
      let mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mail.test(email);
    },

    submitForm() {
      if (this.username === null || this.username === "") {
        this.errorusername = "Merci de saisir un nom d'utilisateur";
      } else if (!this.validEmail(this.email)) {
        this.errormail = " Merci de saisir une adresse mail valide";
      } else if (this.password === null || this.password === "" || this.password.length < 6) {
        this.errorpassword = "Merci de saisir un mot de passe avec plus de 6 caractères";
      } else {
        let form = {
          name: this.username,
          email: this.email,
          password: this.password,
        };
        this.signup(form);
      }
    },
    signup(form) {
      let body = JSON.stringify(form);
      this.axios
        .post(`${process.env.VUE_APP_ENDPOINT}/register`, body, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.status == 200) {
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            let profil = JSON.stringify(response.data.data);
            document.cookie = `profil=${profil};${expires};path=/;secure`;
            this.$store.commit("SET_Profil", response.data.data);
            this.$store.commit("AUTH", true);
            this.$store.commit("SUCCES", response.data.message);
            this.$router.push("/");
          } else {
            throw new Error("un problème est survenu lors de l'enregistrement de votre compte");
          }
        })
        .catch((error) => {
          this.$store.commit("ERROR", error.message);
        });
    },
  },
};
</script>

<style></style>
