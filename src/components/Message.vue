<template>
  <v-container>
    <v-dialog v-model="created" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Success
        </v-card-title>

        <v-card-text>
          {{ message }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$store.state.created = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="errored" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Error
        </v-card-title>

        <v-card-text>
          {{ message }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$store.state.errored = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Message",
  computed: {
    message() {
      return this.$store.state.message;
    },
    created() {
      return this.$store.state.created;
    },
    errored() {
      return this.$store.state.errored;
    }
  },
};
</script>

<style></style>
