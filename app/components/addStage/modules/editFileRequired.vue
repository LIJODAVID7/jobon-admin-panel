<template>
  <!-- <div class="text-center pa-4"> -->
  <!-- <v-btn @click="fileDialog = true"> +Add File Required </v-btn> -->
  <v-btn icon size="x-small" variant="flat" @click="fileDialog = true"
    ><component :is="Pencil" size="20"></component
  ></v-btn>
  <v-dialog v-model="fileDialog" max-width="500px">
    <v-card title="File Required" class="pa-3">
      <v-form>
        <v-row>
          <v-col cols="6">
            <AddStageModulesTextField
              label="Document Type"
              placeholder="Document Type"
              type="text"
              v-model="fileData.documentType"
              :clearable="true"
              variant="outlined"
            />
          </v-col>
          <v-col cols="6">
            <AddStageModulesTextField
              label="Document Name"
              placeholder="Document Name"
              type="text"
              v-model="fileData.documentName"
              :clearable="true"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12">
            <AddStageModulesTextArea
              label="Description"
              placeholder="Description"
              type="text"
              v-model="fileData.description"
              :clearable="true"
              variant="outlined"
            />
          </v-col>
          <v-col cols="6">
            <AddStageModulesSelect
              label="Required"
              placeholder="Is Required"
              v-model="fileData.isRequired"
              :clearable="true"
              variant="outlined"
              :items="[true, false]"
            />
          </v-col>
          <v-col cols="6">
            <AddStageModulesNumberInput
              label="Max size in MB"
              placeholder="Max size in MB"
              v-model="fileData.maxSizeInMB"
              :clearable="true"
              variant="outlined"
            />
          </v-col>
          <v-col cols="12">
            <AddStageModulesMultiSelect
              label="Allowed Formats"
              placeholder="Allowed Formats"
              v-model="fileData.allowedFormats"
              :clearable="true"
              variant="outlined"
              :items="['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'gif']"
            />
          </v-col>
          <v-col cols="12">
            <AddStageModulesTextArea
              label="Instructions"
              placeholder="Instructions"
              type="text"
              v-model="fileData.instructions"
              :clearable="true"
              variant="outlined"
            />
          </v-col>
        </v-row>
      </v-form>
      <v-card-actions class="justify-center">
        <v-row>
          <v-col class="px-1">
            <v-btn
              color="primary"
              variant="outlined"
              block
              @click="fileDialog = false"
              >Cancel</v-btn
            >
          </v-col>
          <v-col class="px-1">
            <v-btn color="primary" variant="flat" block @click="editFile"
              >Submit</v-btn
            ></v-col
          >
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </div> -->
</template>

<script setup>
import { Pencil } from "lucide-vue-next";
const { id } = defineProps({
  id: Number,
});
import { fileRequiredStore } from "~/store/fileRequired";
const fileRequiredStoreData = fileRequiredStore();
const { editFileRequired } = fileRequiredStoreData;
const { fileRequired } = storeToRefs(fileRequiredStoreData);
const fileDialog = ref(false);
const model = defineModel();
const currentFileField = computed(() => {
  return fileRequired?.value?.[id];
});
const fileData = ref(currentFileField);

const editFile = () => {
  editFileRequired(id, fileData.value);
  fileDialog.value = false;
};
</script>
