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
              <v-row>
                <v-col> 
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                    max-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="selectedDate"
                        label="Due date"
                        prepend-icon="mdi-calendar-range"
                        readonly
                        v-on="on"
                        clearable
                        @click:clear="date = null"
                        :rule="inputRules"
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="closeDateMenu"
                      clearable
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
            <v-spacer></v-spacer>
            <!-- add button loader with :loading-->
            <v-btn text @click="submit" class="success mx-0 mt-3" :loading="loading"
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
import moment from "moment"
//import  format from 'date-fns'
import db from '@/fb'


export default {
  data: () => ({
    dialog: false,
    title: "",
    content: "",
    menu: false,
    date: null,
    selectedDate: null,
    loading: false,
    //date:  new Date().toISOString().substr(0, 10),
    //dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    inputRules: [
      (v) => !!v || "This field is required.",
      (v) => v.length >= 3 || "Minimum length is 3 characters",
    ],
  }),

  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true;
        const project = { 
          title: this.title,
          content: this.content,
          due: this.selectedDate,
          person: 'ZweGyi',
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit('projectAdded')
        })
      }
    },   
    closeDateMenu() {
      this.menu = false;
      //this.selectedDate= this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : '';
      this.selectedDate = this.date
        ? moment(this.date).format("Do MMM YYYY")
        : "";
    },
    clear() {
      (this.title = ""), (this.content = ""), (this.data = "");
    },
    //   formatDate(date) {
    //     if (!date) return null;

    //     const [year, month, day] = date.split("-");
    //     return `${month}/${day}/${year}`;
    //   },
    //   parseDate(date) {
    //     if (!date) return null;

    //     const [month, day, year] = date.split("/");
    //     return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    //   },
  },
  computed: {
    
    formattedDue() {
      console.log(this.date);
      return this.date
        ? moment(this.date).format(this.date, "Do MMM YYYY")
        : "";
    },

    // computedDateFormattedDatefns () {
    //     return this.date ? format(this.date, 'EEEE, MMMM do yyyy') : ''
    //   },
    // formattedDate() {
    //   return this.formatDate(this.date);
    // },
  },
};
</script>
