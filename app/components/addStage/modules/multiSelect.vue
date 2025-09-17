<template>
  <v-select
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :hint="hint"
    :variant="variant"
    density="compact"
    v-model="model"
    hide-details="auto"
    :clearable="clearable"
    :rules="rules"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :prefix="prefix"
    :suffix="suffix"
    :items="items"
    multiple
  ></v-select>
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
  multiple,
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
  multiple: Boolean,
});
</script>
