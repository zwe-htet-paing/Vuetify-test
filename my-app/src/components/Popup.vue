<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"
          >Add new project</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
          <!-- form start -->
          <v-form class="px-3" ref="form">
            <v-text-field

              v-model="title"
              label="Title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
             
              v-model="content"
              label="Information"
              prepend-icon="mdi-file-edit"
              :rules="inputRules"
            ></v-textarea>
            <!-- Date picker start -->
            <v-container>
              <v-menu
                offset-y
                v-model="menu"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
        
                    v-bind="attrs"
                    v-on="on"
                    v-model="formattedDate"
                    clearable
                    hint="MM/DD/YYYY format"
                    label="Due date"
                    prepend-icon="mdi-calendar-range"
                    @click:clear="date = null"
                    :rules="inputRules"
                  >
                  </v-text-field>
                </template>
                <v-date-picker v-model="date" @change="menu = false" clearable>
                </v-date-picker>
              </v-menu>
            </v-container>
            <v-spacer></v-spacer>
            <v-btn text @click="submit" class="success mx-0 mt-3"
              >Add Project</v-btn
            >
            <v-btn text @click="clear" class="success mx-0 mt-3">Clear</v-btn>
            <v-btn text @click="dialog = !dialog" class="success mx-0 mt-3"
              >Close</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: (vm) => ({
    dialog: false,
    title: "",
    content: "",
    menu: false,
    date: null,
    //date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    inputRules: [
      (v) => !!v || "This field is required.",
      (v) => v.length >= 3 || "Minimum length is 3 characters",
    ],
  }),
  methods: {
    
    submit() {
      if (this.$refs.form.validate()) { //form validation
        console.log(this.title, this.content);
      }
    },
    clear() {
      (this.title = ""), (this.content = "");
      this.data = "";
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.date);
    },
  },
};
</script>
