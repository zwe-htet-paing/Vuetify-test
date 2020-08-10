<template>
  <div>
    <!-- add snackbar-->
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Project is added</span>
      <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>


    <!-- display the navigation bar -->
    <v-app-bar flat app color="yellow">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Mr.</span>
        <span>ZweGyi</span>
      </v-toolbar-title>
      <v-toolbar-items>
          <v-btn text tag='span' style='cursor: pointer'>TESTING</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <!-- navigation bar links-->
      <v-toolbar-items class='hidden-xs-only' v-if="!userLogedIn">
        <v-btn text v-for="item in items" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon> 
          <span>{{item.title}} </span>
        </v-btn>
      </v-toolbar-items>
      <!-- sign out button -->
      <v-toolbar-items class='hidden-xs-only' v-else>
        <v-btn
          text
          @click='logoutFromFirebase'
          >
          <v-icon left>mdi-logout-variant</v-icon>Logout
        </v-btn>
      </v-toolbar-items>

      <!--drop-down menu -->
      <v-menu flat offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text  v-bind="attrs" v-on="on">
            <v-icon left>mdi-menu-down</v-icon>
            <span left>Menu</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <template > 
        <v-btn text color="grey">
          <span>Sign out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </template> -->
    </v-app-bar>

    <!-- add left navigation drawer-->
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-1.png" />
          </v-avatar>
          <p class="white--text subheading ml-5">ZweGyi</p>
        </v-flex>

        <!-- Add Popup component and call event from Popup.vue -->
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar=true" /> 
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text"> {{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    
  </div>
  
</template>

<script>
import Popup from "./Popup";


export default {
  components: { Popup },
  data() {
    return {
      drawer: false,

      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account-multiple", text: "Team", route: "/team" },
        { icon: "mdi-calendar-range", text: "Calendar", route: "/calendar" },
        { icon: "mdi-table-heart", text: "Datatable", route: "/datatable" },
      ],
      snackbar : false,
      items: [
        {title:'Register', icon: 'mdi-face', link:'/register'},
        {title:'Login', icon: 'mdi-lock-plus', link:'/signin'},
     

      ]
    };
  },
  computed: {
    userLogedIn ()  {
      return this.$store.getters.user
    }
  },
  methods: {
    logoutFromFirebase () {
      this.$store.dispatch('signOutAction')
    }
  }
};
</script>
