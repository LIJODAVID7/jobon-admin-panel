<template>
  <v-container class="login_container" fluid>
    <slot></slot>
  </v-container>
</template>

<style scoped>
.login_container {
  background-image: url("/login.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
