<template>
  <div class="w-100">
    <div class="d-flex justify-space-between align-center">
      <div>
        <div class="text-h5">{{ items.documentName }}</div>
        <div class="text-caption">{{ items.description }}</div>
      </div>
      <div>
        <AddStageModulesEditFileRequired :id="id"/>
        <v-btn
          icon
          size="x-small"
          variant="flat"
          @click="deleteFile(id)"
          class="ml-2"
          color="error"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </div>

    <v-file-upload
      browse-text="Browse Files"
      divider-text="or choose locally"
      icon="mdi-tray-arrow-up"
      filter-by-type=""
      show-size
      title="Upload Documents"
      name="documents"
      :subtitle="`Allowed formats: ${items?.allowedFormats?.join(', ')}`"
    >
    </v-file-upload>
    <div class="text-caption py-2">
      <v-icon class="mr-1">mdi-information</v-icon>{{ items.instructions }}
    </div>
  </div>
</template>

<script setup>
import { Trash } from "lucide-vue-next";
import { fileRequiredStore } from "~/store/fileRequired";
const model = defineModel();
const { items, id } = defineProps({
  items: Object,
  id: Number,
});

const fileRequiredFields = fileRequiredStore();
const { fileRequired } = storeToRefs(fileRequiredFields);
const { removeFileRequired } = fileRequiredFields;

const deleteFile = (value) => {
  removeFileRequired(value);
};
</script>
