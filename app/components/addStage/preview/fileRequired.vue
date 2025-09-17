<template>
  <h3 class="text-center">Preview</h3>

  <div v-for="(item, index) in fileRequired" :key="item.documentType">
    <AddStageModulesUpload :items="item" :id="index" />
  </div>
</template>

<script setup>
import { fileRequiredStore } from "~/store/fileRequired";
const fileRequiredFields = fileRequiredStore();
const { fileRequired } = storeToRefs(fileRequiredFields);
</script>
