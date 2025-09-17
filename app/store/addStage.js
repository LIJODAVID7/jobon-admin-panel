import { defineStore } from "pinia";

export const addStageStore = defineStore(
  "addStageStore",
  () => {
    const addStage = ref({});

    const formFieldsRequired = ref(true);
    const fileFieldsRequired = ref(true);

    function addStageData(value) {
      addStage.value = value;
    }

    return {
      addStageData,
      addStage,
      formFieldsRequired,
      fileFieldsRequired,
    };
  },

  { persist: true, storage: "localStorage" }
);
