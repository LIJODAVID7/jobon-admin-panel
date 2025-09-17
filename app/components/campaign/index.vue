<template>
  <div class="d-flex align-center justify-center">
    <div>
      <NuxtImg src="/campaign.jpg" format="webp" width="100%" height="600px" />
      <div>
        <v-btn block color="red" @click="$router.push('/add-stage')"
          >Add Stage</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { authStore } from "~/store/auth";
const auth = authStore();
const { user, token } = storeToRefs(auth);
</script>
