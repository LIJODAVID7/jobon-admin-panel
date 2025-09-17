import { defineStore } from "pinia";

export const addStatusStore = defineStore(
  "addStatusStore",
  () => {
    const addStatus = ref([]);

    function addStatusData(value) {
      addStatus.value.push(value);
    }
    function removeStatus(index) {
      addStatus.value.splice(index, 1);
    }

    return {
      addStatusData,
      addStatus,
      removeStatus,
    };
  },

  { persist: true, storage: "localStorage" }
);
