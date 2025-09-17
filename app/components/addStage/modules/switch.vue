<template>
  <v-switch v-model="model" :label="label" hide-details >
  </v-switch>
</template>

<script setup>
const model = defineModel();

const { label } = defineProps({
  label: String,
});
</script>
