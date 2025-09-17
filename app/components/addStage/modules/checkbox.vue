<template>
  <v-checkbox-btn
    v-model="model"
    class="pe-2"
    :label="label"
    hide-details
  ></v-checkbox-btn>
</template>
<script setup>
const model = defineModel();
const { label } = defineProps({
  label: String,
});
</script>
