<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-title>Valider ma commande</v-text-title>
    <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-text-field v-model="phoneNumber" label="Numéro de téléphone" required></v-text-field>
    <v-text-field label="Adresse" required></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'Vous devez accepter les conditions pour continuer']"
      label="Veuillez valider les conditions générales de ventes"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Valider
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Corriger le formulaire
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "ValidateForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Le nom est obligatoire"],
    email: "",
    emailRules: [(v) => !!v || "L'adresse mail est obligatoire", (v) => /.+@.+\..+/.test(v) || "L'adresse mail doit être valide"],
    phoneNumber: "",
    phoneNumberRules: [(v) => !!v || "Le numéro de téléphone est obligatoire"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
