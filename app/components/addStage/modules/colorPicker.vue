<template>
  <div class="pb-2 text-left px-2">{{ label }}</div>

  <v-color-picker
    v-model="model"
    title="dasdds"
    class="w-100 px-2"
    mode="hex"
    elevation="0"
    show-swatches
  ></v-color-picker>
</template>
<script setup>
const model = defineModel();
const { label } = defineProps({
  label: String,
});
</script>
