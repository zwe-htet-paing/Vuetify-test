
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Add new project</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"></v-text-field>
            <v-textarea v-model="content" label="Information" prepend-icon="mdi-edit"></v-textarea>
            <v-spacer></v-spacer>
            <v-btn flat @click.stop="submit" class="success mx-0 mt-3">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
    };
  },
  methods: {
    sumbit() {
      console.log(this.title, this.content);
    },
  },
};
</script>
