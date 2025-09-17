<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="4">
        <v-card elevation="6" class="pa-6 rounded-lg">
          <v-card-title class="text-h6 text-center"
            >Select Form Fields</v-card-title
          >
          <AddStagePreview />
          <AddStageModulesFormFieldModal />

          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              variant="outlined"
              block
              @click="addFormFields"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script setup>
import { addStageStore } from "~/store/addStage";
const addStageStoreData = addStageStore();
const { fileFieldsRequired } = storeToRefs(addStageStoreData);
const router = useRouter();
const addFormFields = () => {
  if (fileFieldsRequired.value) {
    router.push("/add-stage/file-required");
  }else{
    router.push("/add-stage/stage-status");

  }
};
</script>
