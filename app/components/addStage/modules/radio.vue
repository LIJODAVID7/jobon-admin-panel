<template>
  <v-radio-group inline v-model="model" hide-details >
    <v-radio v-for="item in items" :label="item" :value="item"></v-radio>
  
  </v-radio-group>
</template>
<script setup>
const model = defineModel();
const {
  label,
  placeholder,
  type,
  hint,
  clearable,
  rules,
  variant,
  prependIcon,
  appendIcon,
  suffix,
  prefix,
  items,
  
} = defineProps({
  label: String,
  placeholder: String,
  type: String,
  hint: String,
  clearable: Boolean,
  rules: Array,
  items: Array,
  variant: String,
  prependIcon: String,
  appendIcon: String,
  suffix: String,
  prefix: String,
});
</script>