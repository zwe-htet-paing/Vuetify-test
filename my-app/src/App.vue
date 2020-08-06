<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        
        <router-view></router-view>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar1";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
