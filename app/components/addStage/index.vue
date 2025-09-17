<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="4">
        <v-card elevation="6" class="pa-6 rounded-lg">
          <v-card-title class="text-h6 text-center"
            >Create Stage </v-card-title
          >
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <AddStageModulesTextField
                    label="Stage Name"
                    placeholder="Name"
                    type="text"
                    v-model="campaignData.campaignName"
                    :clearable="true"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12"
                  ><AddStageModulesTextField
                    label="Display Name"
                    placeholder="Display Name"
                    type="text"
                    v-model="campaignData.displayName"
                    :clearable="true"
                    variant="outlined"
                /></v-col>
                <v-col cols="12"
                  ><AddStageModulesTextArea
                    label="Description"
                    placeholder="Description"
                    type="text"
                    v-model="campaignData.description"
                    variant="outlined"
                /></v-col>
                <v-col cols="12"
                  ><AddStageModulesNumberInput
                    label="Order"
                    placeholder="Order"
                    variant="outlined"
                    v-model="campaignData.order"
                /></v-col>
                <v-col cols="612"
                  ><AddStageModulesCheckbox
                    label="Include Form Fields"
                    v-model="formFieldsRequired"
                /></v-col>
                <v-col cols="12"
                  ><AddStageModulesCheckbox
                    label="Include File Required"
                    v-model="fileFieldsRequired"
                /></v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              variant="outlined"
              block
              @click="addStageDatas"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { addStageStore } from "~/store/addStage";
const campaignStore = addStageStore();
const { addStageData } = campaignStore;
const { addStage, formFieldsRequired, fileFieldsRequired } =
  storeToRefs(campaignStore);
const router = useRouter();
const campaignData = ref({
  ...addStage.value,
});
const addStageDatas = () => {
  addStageData({
    ...addStage.value,
    ...campaignData.value,
  });
  if (formFieldsRequired.value) {
    router.push("/add-stage/form-fields");
  } else if (fileFieldsRequired.value) {
    router.push("/add-stage/file-required");
  }
};
</script>
