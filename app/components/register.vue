<template>
  <v-container fluid class="d-flex justify-center align-center fill-height">
    <v-card
      elevation="8"
      class="d-flex rounded-xl"
      max-width="900"
      width="100%"
      height="auto"
    >
      <v-col
        cols="12"
        md="6"
        class="left-section login_container d-none d-md-flex"
      >
      </v-col>

      <!-- Right Side -->
      <v-col cols="12" md="6" class="pa-8 d-flex flex-column justify-center">
        <h3 class="text-h6 mb-6 text-center">
          Create an account to get started
        </h3>
        <v-form>
          <v-text-field
            label="User Name"
            type="text"
            variant="solo"
            prepend-inner-icon="mdi-account"
            v-model="register.name"
          />
          <v-text-field
            label="Email"
            type="email"
            variant="solo"
            prepend-inner-icon="mdi-email"
            v-model="register.email"
          />
          <v-text-field
            label="Mobile Number"
            type="number"
            variant="solo"
            prepend-inner-icon="mdi-cellphone"
            v-model="register.phone"
          />
          <v-text-field
            label="Password"
            type="password"
            variant="solo"
            prepend-inner-icon="mdi-lock"
            v-model="register.password"
          />
          <v-select
            label="Select Role"
            :items="[
              { label: 'Admin', value: 'admin' },
              { label: 'Super Admin', value: 'super_admin' },
            ]"
            item-title="label"
            item-value="value"
            variant="solo"
            v-model="register.role"
          />
          <v-btn
            color="primary"
            block
            size="large"
            class="mb-4"
            @click="registerUser"
            >Register</v-btn
          >
          <div class="text-center">
            <small
              >Already have an account?
              <NuxtLink class="text-info font-weight-bold" to="/login"
                >Login</NuxtLink
              >
            </small>
          </div>
        </v-form>
      </v-col>
    </v-card>
  </v-container>
</template>
<script setup>
const register = ref({
  email: "",
  name: "",
  password: "",
  phone: "",
  role: "",
});

const registerUser = async () => {
  await createUser(register.value);
};
</script>
<style scoped>
.login_container {
  background-image: url("/register.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
