<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            required
            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
            :type="passwordShow ? 'text' : 'password'"
            @click:append="passwordShow = !passwordShow"
          ></v-text-field>
          <v-text-field
            label="comfirm Password"
            v-model="comfirmPassword"
            :rules="passwordRules"
            required
            :append-icon="comfirmPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
            :type="comfirmPasswordShow ? 'text' : 'password'"
            @click:append="comfirmPasswordShow = !comfirmPasswordShow"
          ></v-text-field>
          <v-btn :disabled="!valid" color="success" @click="validate"
            >Register</v-btn
          >
          <v-btn color="error" @click="reset">Reset Form</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@+./.test(v) || "Email must be valid",
      ],
      password: "",
      comfirmPassword: "",
      passwordRules: [(v) => !!v || "Password and comfirm password required"],
      passwordShow: false,
      comfirmPasswordShow: false,
      valid: true,
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.registerWithFirebase();
        console.log("You are successful created user")
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    registerWithFirebase() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("signUpAction", user);
    },
  },
};
</script>
