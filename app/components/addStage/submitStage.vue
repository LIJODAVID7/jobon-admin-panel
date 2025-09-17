<template>
  <div class="d-flex align-center justify-center">
    <div>
      <NuxtImg src="/submit.jpg" format="webp" width="100%" height="600px" />
      <div>
        <v-btn block color="green" @click="submitCampaign">Submit Stage</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { addStageStore } from "~/store/addStage";
import { formStore } from "~/store/formFields";
import { fileRequiredStore } from "~/store/fileRequired";
import { addStatusStore } from "~/store/addStatus";
const { addStage } = storeToRefs(addStageStore());
const { formFields } = storeToRefs(formStore());
const { fileRequired } = storeToRefs(fileRequiredStore());
const { addStatus } = storeToRefs(addStatusStore());

const submitCampaign = async () => {
  const payload = {
    name: addStage.value.campaignName,
    displayName: addStage.value.displayName,
    description: addStage.value.description,
    order: addStage.value.order,
    formFields: formFields.value,
    fileRequirements: fileRequired.value,
    assignmentConfig: {
      assignToRole: "any",
      allowSpecificAssignment: false,
      autoAssignmentRule: "manual",
      requiredSkills: [],
      maxConcurrentAssignments: 50,
    },

    metadata: {
      category: "screening",
      estimatedDurationInDays: 1,
      complexity: "low",
      tags: [
        "registration",
        "biodata",
        "initial-screening",
        "candidate-onboarding",
        "profile-creation",
      ],
    },

    availableStatuses: addStatus.value,
  };
  await submitCampaignData(payload);
};
</script>
