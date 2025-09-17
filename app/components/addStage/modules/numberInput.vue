<template>
  <v-number-input
    :reverse="reverse"
    :variant="variant"
    :label="label"
    :hideInput="hideInput"
    :inset="inset"
    density="compact"
    control-variant="hidden"
    hide-details
  ></v-number-input>
</template>
<script setup>
const {
  label,
  placeholder,
  hint,
  clearable,
  rules,
  variant,
  prependIcon,
  appendIcon,
  suffix,
  prefix,
  reverse,
  inset,
  hideInput,
} = defineProps({
  label: String,
  placeholder: String,
  hint: String,
  reverse: Boolean,
  rules: Array,
  items: Array,
  variant: String,
  inset: Boolean,
  prependIcon: String,
  appendIcon: String,
  suffix: String,
  prefix: String,
  hideInput: Boolean,
});
</script>
