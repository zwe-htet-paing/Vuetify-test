<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm16 md4 lg3 v-for="person in team" :Key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
          </v-card>
          <v-card-text>
            <div class="subheading">{{ person.name }}</div>
            <div class="grey--text">{{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="red">
              <v-icon small left>mdi-message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "ZweGyi",
          role: "Web developer",
          avatar: "/avatar-1.png",
        },
        { name: "Theanastasiah", role: "Graphic designer", avatar: "/image2.jpg" },
        { name: "Theanastasiah", role: "Web developer", avatar: "/image4.jpg" },
        {
          name: "Miaalvescz",
          role: "Social media maverick",
          avatar: "/image7.jpg",
        },
        { name: "Miaalvescz", role: "Sales guru", avatar: "/image6.jpg" },
      ],
    };
  },
};
</script>
