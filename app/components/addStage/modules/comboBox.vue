<template>
  <v-combobox
    v-model="model"
    :label="label"
    :placeholder="placeholder"
    :hint="hint"
    :clearable="clearable"
    :rules="rules"
    :variant="variant"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :suffix="suffix"
    :prefix="prefix"
    chips
    closable-chips
    multiple
    :items="[]"
    density="compact"
    hide-details
  >
    <!-- Custom chip slot -->
    <template v-slot:chip="{ props, item }">
      <v-chip v-bind="props" label>
        {{ item.raw }}
        <!-- shows entered value -->
        <template v-slot:close>
          <v-icon icon="$close" size="14" />
        </template>
      </v-chip>
    </template>
  </v-combobox>
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
  suffix: String,
  prefix: String,
});
</script>
