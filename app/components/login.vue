<template>
  <v-container fluid class="d-flex justify-center align-center fill-height">
    <v-card
      elevation="8"
      class="d-flex rounded-xl"
      max-width="900"
      width="100%"
      height="500px"
    >
      <v-col
        cols="12"
        md="6"
        class="left-section login_container d-none d-md-flex"
      >
      </v-col>

      <!-- Right Side -->
      <v-col cols="12" md="6" class="pa-8 d-flex flex-column justify-center">
        <h3 class="text-h6 mb-6 text-center">Login to Your Account</h3>
        <v-form>
          <v-text-field
            label="Email"
            type="email"
            variant="solo"
            prepend-inner-icon="mdi-email"
            v-model="email"
          />
          <v-text-field
            label="Password"
            type="password"
            variant="solo"
            prepend-inner-icon="mdi-lock"
            v-model="password"
          />
          <v-btn color="primary" block size="large" class="mb-4" @click="login"
            >Login</v-btn
          >
          <div class="text-center">
            <small
              >Don't have an account?
              <NuxtLink class="text-error font-weight-bold" to="/register"
                >Register</NuxtLink
              >
            </small>
          </div>
        </v-form>
      </v-col>
    </v-card>
  </v-container>
</template>
<script setup>
const email = ref("");
const password = ref("");
const router = useRouter();
const login = async () => {
  const payload = { email: email.value, password: password.value };
  const { data, error } = await userLogin(payload);
  if (data?.success) {
    router.push("/");
  }
};
</script>

<style scoped>
.login_container {
  background-image: url("/login-side.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
