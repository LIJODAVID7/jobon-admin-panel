<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ props }">
      <v-text-field
        v-model="formattedDate"
        readonly
        v-bind="props"
        prepend-inner-icon="mdi-calendar"
        :variant="variant"
        density="compact"
        hide-details
        :placeholder="placeholder"
      />
    </template>

    <v-date-picker
      v-model="date"
      @update:model-value="saveDate"
    ></v-date-picker>
  </v-menu>
</template>

<script setup>
const { variant, placeholder } = defineProps({
  variant: String,
  placeholder: String,
});
import { ref, computed } from "vue";

const menu = ref(false);
const date = ref(null);
const model = defineModel();

const formattedDate = computed(() => {
  if (!date.value) return "";
  return new Date(date.value).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
});

const saveDate = () => {
  menu.value = false; // close picker when date selected
};
</script>
