<template>
  <v-textarea
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
  ></v-textarea>
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
  suffix,prefix
} = defineProps({
  label: String,
  placeholder: String,
  type: String,
  hint: String,
  clearable: Boolean,
  rules: Array,
  variant: String,
  prependIcon: String,
  appendIcon: String,
  suffix:String,
  prefix:String
});
</script>
