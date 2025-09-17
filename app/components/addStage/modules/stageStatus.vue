<template>
  <AddStagePreviewStageStatus />
  <div class="px-2 text-center">
    <v-btn variant="outlined" @click="statusDialog = true">
      <component :is="Plus" size="20" />add status
    </v-btn>
  </div>
  <v-dialog v-model="statusDialog" max-width="500px" class="text-center">
    <v-card title="Add Stage Status" class="pa-3">
      <v-form>
        <v-row>
          <v-col cols="6">
            <AddStageModulesTextField
              label="Status label"
              placeholder="Status Label"
              type="text"
              :clearable="true"
              variant="outlined"
              v-model="stageData.statusLabel"
            />
          </v-col>
          <v-col cols="6">
            <AddStageModulesTextField
              label="Status Key"
              placeholder="Status Key"
              type="text"
              :clearable="true"
              variant="outlined"
              v-model="stageData.statusKey"
            />
          </v-col>
          <v-col cols="6">
            <AddStageModulesTextField
              label="Status Type"
              placeholder="Status Type"
              type="text"
              :clearable="true"
              variant="outlined"
              v-model="stageData.statusType"
            />
          </v-col>
          <v-col cols="6">
            <AddStageModulesTextField
              label="Next Stage"
              placeholder="Next Stage"
              type="text"
              :clearable="true"
              variant="outlined"
              v-model="stageData.nextStage"
            />
          </v-col>

          <v-col cols="12">
            <AddStageModulesTextField
              label="Action Type"
              placeholder="Action type"
              type="text"
              :clearable="true"
              variant="outlined"
              v-model="stageData.actionType"
            />
          </v-col>
          <v-col cols="12">
            <AddStageModulesCheckbox
              label="Requires Comment"
              v-model="stageData.requiresComment"
            />
          </v-col>
          <v-col cols="12">
            <AddStageModulesColorPicker
              label="Select Status Color"
              v-model="stageData.color"
            />
          </v-col>
        </v-row>
      </v-form>
      <v-card-actions class="my-3">
        <v-row>
          <v-col class="px-1">
            <v-btn
              color="primary"
              variant="outlined"
              block
              @click="statusDialog = false"
              >Cancel</v-btn
            >
          </v-col>
          <v-col class="px-1">
            <v-btn color="primary" variant="flat" block @click="addStatusFields"
              >Submit</v-btn
            ></v-col
          >
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { Plus } from "lucide-vue-next";
import { addStatusStore } from "~/store/addStatus";
const statusStore = addStatusStore();
const { addStatus } = storeToRefs(statusStore);
const { addStatusData } = statusStore;
const statusDialog = ref(false);
const stageData = ref({
  statusKey: "",
  statusLabel: "",
  statusType: "",
  nextStage: "",
  requiresComment: false,
  color: "",
  actionType: "",
});
const addStatusFields = () => {
  addStatusData(stageData.value);
  stageData.value = {
    statusKey: "",
    statusLabel: "",
    statusType: "",
    nextStage: "",
    requiresComment: false,
    color: "",
    actionType: "",
  };
  statusDialog.value = false;
};
</script>
